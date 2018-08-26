import { Component, Prop, State, Element, Method } from '@stencil/core';

@Component({
  tag: 'web-audio-visualizer',
  styleUrl: 'web-audio-visualizer.scss',
  shadow: true
})

export class WebAudioVisualizer {
  @Element() element: HTMLElement;

  @State() canvas: HTMLCanvasElement;
  @State() canvasCTX: any|WebGLRenderingContext|CanvasRenderingContext2D;

  @Prop() for: string = "web_audio";

  @Prop() type: string = "wave";
  @Prop() smoothing: number = 0.9;
  @Prop() size: number = 1024;
  @State() freqs: Uint8Array;
  @State() times: Uint8Array;

  @Prop() @State() width: number = 800;
  @Prop() @State() height: number = 800;

  @State() context: AudioContext;
  @State() analyser: AnalyserNode;
  @Prop() renderer: AnalyserNode;

  @State() vertex: string;
  @State() vertexShader: string;
  @State() fragment: string;
  @State() fragShader: string;
  @State() fragTime: WebGLUniformLocation;
  @State() fragSpectrumArray: Uint8Array;

  @State() _bufferLength: AnalyserNode;
  @State() _dataArray: AnalyserNode;

  componentDidLoad() {
    this.canvas = this.element.querySelector('canvas');
    // this.width = this.element.outerWidth
  }

  @Method()
  connect (context: AudioContext, destination) {
    this.context = context;

    this.analyser = this.context.createAnalyser();
    this.analyser.connect(destination);

    this.freqs = new Uint8Array(this.analyser.frequencyBinCount);
    this.times = new Uint8Array(this.analyser.frequencyBinCount);

    if (this.type === "webgl") {
      this.canvasCTX = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
      this.__prepareWebGL();
    } else {
      this.canvasCTX = this.canvas.getContext('2d');
    }

    requestAnimationFrame(this.draw.bind(this));

    return this;
  }

  draw () {
    this.analyser.smoothingTimeConstant = this.smoothing;
    this.analyser.fftSize = this.size;

    // Get the frequency data from the currently playing music
    this.analyser.getByteFrequencyData(this.freqs);
    this.analyser.getByteTimeDomainData(this.times);

    if (this.type !== "webgl") {
      var width = Math.floor(this.freqs.length);
      this.canvas.width = width || this.width;
      this.canvas.height = this.height;
    }

    switch (this.type) {
      case "wave":
      this.wave();
      break;

      case "bars":
      this.bars();
      break;

      case "webgl":
      this.webgl();
      break;
    }

    requestAnimationFrame(this.draw.bind(this));
  }

  wave () {
    this.canvasCTX.fillRect(0, 0, this.width * 2, this.height);
    // Draw the time domain chart.
    for (var i = 0; i < this.analyser.frequencyBinCount; i++) {
      var value = this.times[i];
      var percent = value / 256;
      var height = this.height * percent;
      var offset = this.height - height;
      var barWidth =  this.width / this.analyser.frequencyBinCount + 4;
      var hue = i/this.analyser.frequencyBinCount * 360;
      this.canvasCTX.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
      this.canvasCTX.fillRect(i * barWidth, offset, 4, 4);
    }
  }

  bars () {
    // Draw the frequency domain chart.
    for (var i = 0; i < this.analyser.frequencyBinCount; i++) {
      var value = this.freqs[i];
      var percent = value / 256;
      var height = this.height * percent;
      var offset = this.height - height;
      var barWidth = (this.width/this.analyser.frequencyBinCount) + 1;
      var hue = i/this.analyser.frequencyBinCount * 360;
      this.canvasCTX.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
      this.canvasCTX.fillRect(i * barWidth, offset, barWidth, height);
    }
  }

  webgl () {
    this.canvasCTX.uniform1f(this.fragTime, this.context.currentTime)
    this.canvasCTX.fillStyle = 'black';

    this.__copyAudioDataToTexture();
    this.__renderQuad();
  }

  getFrequencyValue (freq) {
    var nyquist = this.context.sampleRate / 2;
    var index = Math.round(freq/nyquist * this.freqs.length);
    return this.freqs[index];
  }

  render() {
    return (
      <canvas id="canvas"></canvas>
    );
  }

  // Private
  __prepareWebGL() {
    const vbo = this.canvasCTX.createBuffer();
    this.canvasCTX.bindBuffer(this.canvasCTX.ARRAY_BUFFER, vbo);
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    this.canvasCTX.bufferData(this.canvasCTX.ARRAY_BUFFER, vertices, this.canvasCTX.STATIC_DRAW)
    this.canvasCTX.vertexAttribPointer(0, 2, this.canvasCTX.FLOAT, false, 0, 0)

    let vertex: any = this.element.querySelector('web-audio-visualizer-shader[type="vertex"]');
    this.vertex = vertex.innerText;

    let fragment: any = this.element.querySelector('web-audio-visualizer-shader[type="fragment"]');
    this.fragment = fragment.innerText;

    this.fragShader = this.__createShader();

    const fragPosition = this.canvasCTX.getAttribLocation(this.fragShader, 'position');
    this.canvasCTX.enableVertexAttribArray(fragPosition);

    this.fragTime = this.canvasCTX.getUniformLocation(this.fragShader, 'time');
    this.canvasCTX.uniform1f(this.fragTime, this.context.currentTime);

    const fragResolution = this.canvasCTX.getUniformLocation(this.fragShader, 'resolution');
    this.canvasCTX.uniform2f(fragResolution, this.width, this.height);
    this.fragSpectrumArray = new Uint8Array(4 * this.freqs.length);

    const fragSpectrum = this.__createTexture();
  }

  __createShader() {
    const vertexShader = this.canvasCTX.createShader(this.canvasCTX.VERTEX_SHADER);
    this.canvasCTX.shaderSource(vertexShader, this.vertex);
    this.canvasCTX.compileShader(vertexShader);
    if (!this.canvasCTX.getShaderParameter(vertexShader, this.canvasCTX.COMPILE_STATUS)) {
      throw new Error(this.canvasCTX.getShaderInfoLog(vertexShader));
    }

    const fragmentShader = this.canvasCTX.createShader(this.canvasCTX.FRAGMENT_SHADER)
    this.canvasCTX.shaderSource(fragmentShader, this.fragment);
    this.canvasCTX.compileShader(fragmentShader);
    if (!this.canvasCTX.getShaderParameter(fragmentShader, this.canvasCTX.COMPILE_STATUS)) {
      throw new Error(this.canvasCTX.getShaderInfoLog(fragmentShader));
    }

    const shader = this.canvasCTX.createProgram();
    this.canvasCTX.attachShader(shader, vertexShader);
    this.canvasCTX.attachShader(shader, fragmentShader);
    this.canvasCTX.linkProgram(shader);
    this.canvasCTX.useProgram(shader);

    return shader;
  }


  __createTexture () {
    const texture = this.canvasCTX.createTexture();
    this.canvasCTX.bindTexture(this.canvasCTX.TEXTURE_2D, texture);
    this.canvasCTX.texParameteri(this.canvasCTX.TEXTURE_2D, this.canvasCTX.TEXTURE_MIN_FILTER, this.canvasCTX.LINEAR);
    this.canvasCTX.texParameteri(this.canvasCTX.TEXTURE_2D, this.canvasCTX.TEXTURE_WRAP_S, this.canvasCTX.CLAMP_TO_EDGE);
    this.canvasCTX.texParameteri(this.canvasCTX.TEXTURE_2D, this.canvasCTX.TEXTURE_WRAP_T, this.canvasCTX.CLAMP_TO_EDGE);
    return texture;
  }


  __copyAudioDataToTexture () {
    for (let i = 0; i < this.freqs.length; i++) {
      this.fragSpectrumArray[6 * i + 0] = this.freqs[i] // R
      this.fragSpectrumArray[6 * i + 1] = this.freqs[i] // G
      this.fragSpectrumArray[6 * i + 2] = this.freqs[i] // B
      this.fragSpectrumArray[6 * i + 3] = 255           // A
    }

    this.canvasCTX.texImage2D(this.canvasCTX.TEXTURE_2D, 0, this.canvasCTX.RGBA, this.freqs.length, 1, 0, this.canvasCTX.RGBA, this.canvasCTX.UNSIGNED_BYTE, this.fragSpectrumArray)
  }

  __renderQuad () {
    this.canvasCTX.drawArrays(this.canvasCTX.TRIANGLE_STRIP, 0, 4)
  }
}

import { Component, Prop, State, Element, Method, Watch, h } from '@stencil/core';
import {bars, wave, circle, bars2} from './visualizations';
import {colors} from '../../../utils'
import hexToHsl from 'hex-to-hsl';

@Component({
  tag: 'web-audio-visualizer',
  styleUrl: 'web-audio-visualizer.css',
  shadow: true
})

export class WebAudioVisualizer {
  @Element() element: HTMLElement;

  @State() canvas: HTMLCanvasElement;
  @State() canvasCTX: any|WebGLRenderingContext|CanvasRenderingContext2D;

  @Prop({ mutable: true, reflect: true }) for: string = "web_audio";

  @Prop({ mutable: true, reflect: true }) type: string|"wave"|"bars"|"circle"|"bars2" = "wave";
  @Prop() smoothing: number = 0.7;
  @Prop() size: number = 1024;
  @Prop() color: string = "white";
  @State() freqs: Uint8Array;
  @State() times: Uint8Array;

  @Prop({ mutable: true, reflect: true }) width: number = 1024;
  @Prop({ mutable: true, reflect: true }) height: number = 1024;

  @State() context: AudioContext;
  @Prop({mutable: true}) analyser: AnalyserNode;
  @Prop() renderer: AnalyserNode;

  @State() vertex: string;
  @State() vertexShader: string;
  @State() fragment: string;
  @State() fragShader: string;
  @State() fragTime: WebGLUniformLocation;
  @State() fragSpectrumArray: Uint8Array;
  @State() fragSpectrum: Uint8Array;

  @State() _bufferLength: AnalyserNode;
  @State() _dataArray: AnalyserNode;
  @Prop({mutable: true}) _color: any;

  componentWillLoad() {
    this.handleColorChange();
  }

  componentDidLoad() {
    this.canvas = this.element.shadowRoot.querySelector('canvas');
  }

  @Watch('color')
  handleColorChange () {
    if (["white", "black", "black-alt"].includes(this.color)) {
      this._color = hexToHsl(colors[this.color])
    } else {
      this._color = hexToHsl(colors[this.color][5]);
    }
  }

  @Method()
  async connect (context: AudioContext, destination?) {
    this.context = context;

    this.analyser = this.context.createAnalyser();

    if (destination) {
      this.analyser.connect(destination);
    }

    this.freqs = new Uint8Array(this.analyser.frequencyBinCount);
    this.times = new Uint8Array(this.analyser.frequencyBinCount);

    this.canvasCTX = this.canvas.getContext('2d');

    requestAnimationFrame(this.draw.bind(this));

    return this;
  }

  draw () {
    this.analyser.smoothingTimeConstant = this.smoothing;
    this.analyser.fftSize = this.size;

    // Get the frequency data from the currently playing music
    this.analyser.getByteFrequencyData(this.freqs);
    this.analyser.getByteTimeDomainData(this.times);

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.clearBackground()

    if (this.type === "wave") {
      wave(this);
    } else if (this.type === "bars") {
      bars(this);
    } else if (this.type === "bars2") {
      bars2(this);
    } else if (this.type === "circle") {
      circle(this);
    }

    requestAnimationFrame(this.draw.bind(this));
  }

  clearBackground = () => {
    this.canvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvasCTX.fillStyle = "transparent";
    this.canvasCTX.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  getFrequencyValue (freq) {
    var nyquist = this.context.sampleRate / 2;
    var index = Math.round(freq/nyquist * this.freqs.length);
    return this.freqs[index];
  }

  render() {
    return (
      <canvas id="canvas" />
      );
    }
  }

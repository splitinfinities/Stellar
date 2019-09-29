import { Component, Prop, State, Method, Element, Event, EventEmitter } from '@stencil/core';
import raf from 'raf'

@Component({
  tag: 'web-audio-source',
  shadow: true
})

export class WebAudioSource {

  @Element() element: HTMLElement;
  @State() webAudioWrapper: HTMLElement;

  @Prop({ mutable: true, reflect: true }) src: string;
  @Prop({ mutable: true, reflect: true }) name: string;

  @Prop() inert: boolean = false;

  @Prop({ mutable: true, reflect: true }) midikey: number = 0;
  @Prop({ mutable: true, reflect: true }) midichannel: number = 1;

  @Prop({mutable: true}) prepared: boolean = false;
  @State() status: string = "paused";
  @Prop({ mutable: true, reflect: true }) effectsvolume: number = 100;

  @State() context: AudioContext;
  @State() masterGain: GainNode;
  @State() wetGain: GainNode;
  @State() dryGain: GainNode;
  @State() channelGain: GainNode;
  @State() effects: Array<object> = [];
  @State() instances: Array<object> = [];

  @State() source: AudioBufferSourceNode;
  @State() buffer: AudioBuffer;
  @State() entry: string;
  @State() duration: number = 0.0;
  @State() startTime: number = 0.0;
  @State() pausedTime: number = 0.0;
  @State() elapsedTime: number = 0.0;
  @Prop({ mutable: true }) playing: boolean = false;

  @Event() update: EventEmitter;

  @Method()
  async getBuffer() {
    return this.buffer;
  }

  @Method()
  async webAudio() {
    return this.webAudioWrapper;
  }

  @Method()
  async gain(place: string = "wet") {
    if (place === "wet") {
      return this.wetGain;
    } else if (place === "dry") {
      return this.dryGain;
    } else if (place === "channel") {
      return this.channelGain;
    }
  }

  @Method()
  async getDuration() {
    return this.duration
  }

  currentTime () {
    let current = 0;

    if (this.pausedTime) {
        current = this.pausedTime;
    } else {
      if (this.startTime) {
          current = this.context.currentTime - this.startTime;
      }
    }

    if (current >= this.duration) {
      current = this.duration;
    }

    return current;
  };

  @Method()
  async prepare () {
    if (!this.inert && this.context) {
      this.source = this.context.createBufferSource();

      this.source.buffer = this.buffer;

      if (this.wetGain) {
        this.wetGain.gain.value = this.effectsvolume / 100;
        this.dryGain.gain.value = Math.abs((this.effectsvolume - 100) / 100);
      } else {
        this.dryGain.gain.value = 1;
      }

      if (this.wetGain) {
        this.source.connect(this.wetGain);
      }

      this.source.connect(this.dryGain);

      this.duration = this.source.buffer.duration;
      this.prepared = true;
    }
  }

  @Method()
  async play() {
    if (!this.inert) {
      await this.prepare();

      if (this.source) {
        this.source.start(0, this.pausedTime);

        this.startTime = this.context.currentTime - this.pausedTime;
        this.pausedTime = 0;
        this.playing = true;

        this.tick()

        raf(() => { this.tick() })
      }
    } else {
      throw "Cannot play inert media."
    }
  }

  @Method()
  async skipTo (time) {
    await this.stop();
    this.pausedTime = time / 1000
    await this.play();
  }

  @Method()
  async pause () {
    this.elapsedTime = this.context.currentTime - this.startTime;
    await this.stop();
    this.pausedTime = this.elapsedTime;
    this.playing = false;
  }

  @Method()
  async toggle () {
    if (this.playing) {
      await this.pause()
    } else {
      await this.play()
    }
  }

  @Method()
  async stop () {
    if (this.source) {
      await this.source.disconnect();
      await this.source.stop();
    }

    this.source = null;
    this.pausedTime = 0;
    this.startTime = 0;
    this.playing = false;
  }

  tick() {
    this.update.emit({
      time: this.currentTime(),
      duration: this.duration
    })

    if (this.source) {
      raf(() => { this.tick() })
    }
  }

  @Method()
  async assignBuffer (webAudio, buffer) {
    this.webAudioWrapper = webAudio.element;
    this.context = webAudio.context;
    this.buffer = buffer;

    if (!this.inert) {
      this.masterGain = webAudio.gain;
      this.channelGain = this.context.createGain();

      await this.prepareEffects();

      if (Object.keys(this.effects).length > 0) {
        // Make the source and gain
        this.wetGain = this.context.createGain();
        let previous = "";

        Object.keys(this.effects).reverse().forEach((element, index) => {
          if (index === 0) {
            this.wetGain.connect(this.effects[element]);
          } else {
            this.effects[previous].connect(this.effects[element]);
          }

          previous = element;
        });

        this.effects[previous].connect(this.channelGain)
      }

      this.dryGain = this.context.createGain();
      this.dryGain.connect(this.channelGain);
      this.channelGain.connect(this.masterGain)
    }
  }

  async prepareEffects () {
    if (this.element.parentElement.nodeName !== "WEB-AUDIO") {
      let element: any = this.element.parentElement;

      while (element.nodeName !== "WEB-AUDIO") {
        this.effects[element.getAttribute("name")] = await element.attachEffect(this.context, this.element);
        element = element.parentElement;
      }
    }
  }
}

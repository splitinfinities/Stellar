import { Component, Prop, State, Method, Element } from '@stencil/core';

@Component({
  tag: 'web-audio-source',
  styleUrl: 'web-audio-source.scss',
  shadow: true
})

export class WebAudioSource {

  @Element() element: HTMLElement;
  @State() webAudioWrapper: HTMLElement;

  @Prop() src: string;
  @Prop() name: string;

  @Prop() inert: boolean = false;

  @Prop() midikey: number = 0;
  @Prop() midichannel: number = 1;

  @State() status: string = "paused";
  @Prop() effectsvolume: number = 100;

  @State() context: AudioContext;
  @State() masterGain: GainNode;
  @State() wetGain: GainNode;
  @State() dryGain: GainNode;
  @State() channelGain: GainNode;
  @State() effects: Array<object> = [];

  @State() source: AudioBufferSourceNode;
  @State() buffer: AudioBuffer;
  @State() entry: string;

  @Method()
  getBuffer() {
    return this.buffer;
  }

  @Method()
  webAudio() {
    return this.webAudioWrapper;
  }

  @Method()
  gain(place: string = "wet") {
    if (place === "wet") {
      return this.wetGain;
    } else if (place === "dry") {
      return this.dryGain;
    } else if (place === "channel") {
      return this.channelGain;
    }
  }

  @Method()
  play() {
    if (!this.inert) {
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

      this.source.start(0);
    } else {
      throw "Cannot play inert media."
    }
  }

  @Method()
  assignBuffer (webAudio, buffer) {
    this.webAudioWrapper = webAudio.element;
    this.context = webAudio.context;
    this.buffer = buffer;

    if (!this.inert) {
      this.masterGain = webAudio.gain;
      this.channelGain = this.context.createGain();

      this.prepareEffects();

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

  prepareEffects () {
    if (this.element.parentElement.nodeName !== "WEB-AUDIO") {
      let element: any = this.element.parentElement;

      while (element.nodeName !== "WEB-AUDIO") {
        this.effects[element.getAttribute("name")] = element.attachEffect(this.context, this.element);
        element = element.parentElement;
      }
    }
  }
}

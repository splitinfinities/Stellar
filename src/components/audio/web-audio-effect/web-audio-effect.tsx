import { Component, Prop, State, Method, Element } from '@stencil/core';
import { assert } from '../helpers'

import { buildBiquadFilterNode, buildDelayNode, buildReverbNode } from '../effects'
import { WebAudio } from '../web-audio/web-audio'
import { WebAudioSource } from '../web-audio-source/web-audio-source'

@Component({
  tag: 'web-audio-effect',
  shadow: true
})

export class WebAudioEffect {

  @Element() element: HTMLElement

  @Prop() type: string;
  @Prop() use: string;
  @State() _use: HTMLElement;
  @Prop() method: string = "lowshelf";
  @State() effect: string;
  @Prop() value: number = 1.0;

  @Prop() responds: string = null;
  @Prop() midicontroller: number = 0;
  @Prop() axis: string = "x";

  @State() context: AudioContext;
  @State() source: WebAudioSource;
  @State() parent: WebAudioEffect | WebAudio;

  @Method()
  async attachEffect (context, source) {
    this.context = context;
    this.source = source;
    const webaudio = await source.webAudio()
    this._use = webaudio.querySelector(`web-audio-source[name=${this.use}]`)

    if (assert(this.type, `"${this.type}" is not a valid effect - Routing around to masterGain."`)) {
      if (this.type === "panner") {
        // make a PannerNode
      } else if (this.type === "listener") {
        // make a AudioListener
      } else if (this.type === "reverb") {
        // make a ConvolverNode
        this.effect = await buildReverbNode(this.context, this);
      } else if (this.type === "filter") {
        // make a BiquadFilterNode
        this.effect = buildBiquadFilterNode(this.context, this);
      } else if (this.type === "delay") {
        // make a DelayNode
        this.effect = buildDelayNode(this.context, this);
      } else if (this.type === "compression") {
        // make a DynamicsCompressorNode
      } else if (this.type === "distortion") {
        // make a WaveShaperNode
      }
    }

    return this.effect;
  }

  effects () {
     return ["panner", "listener", "reverb", "delay", "compression", "distortion", "filter"];
  }
}

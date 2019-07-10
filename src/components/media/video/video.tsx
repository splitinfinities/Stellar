import { Component, Element, State, Prop, h, Method, Event, EventEmitter, Watch } from '@stencil/core';
import properties from 'css-custom-properties'

@Component({
  tag: 'stellar-video',
  styleUrl: 'video.css'
})
export class Video {
  @Element() element: HTMLElement;

  @Prop({mutable: true, reflect: true}) width: number;
  @Prop({mutable: true, reflect: true}) height: number;
  @Prop() trackInView: boolean = true;
  @Prop() preload: string = "auto";
  @Prop() autoplay: boolean = false;
  @Prop() muted: boolean = false;
  @Prop() playsinline: boolean = false;
  @Prop() poster: string;
  @Prop() controls: boolean = true;
  @Prop() overlay: boolean;
  @Prop({mutable: true}) video_tag: HTMLVideoElement;
  @Prop({mutable: true}) playing: boolean = false;

  @State() duration: number = 0.0;
  @State() startTime: number = 0.0;
  @State() pausedTime: number = 0.0;
  @State() currentTime: number = 0.0;
  @State() interval: any;

  @Event() update: EventEmitter;
  @Event() played: EventEmitter;
  @Event() paused: EventEmitter;
  @Event() loaded: EventEmitter;

  componentDidLoad() {
    this.video_tag = this.element.querySelector('video');

    this.video_tag.onplay = () => {
      this.playing = true;
      this.played.emit(this.eventData);
      this.update.emit(this.eventData);
    }

    this.video_tag.onpause = () => {
      this.playing = false;
      this.pausedTime = this.video_tag.currentTime;
      this.paused.emit(this.eventData);
      this.update.emit(this.eventData);
    }

    this.video_tag.onloadedmetadata = () => {
      this.setDimensions();
      this.duration = this.video_tag.duration;
      this.loaded.emit(this.eventData);
    }
  }

  get eventData () {
    return {
      playing: this.playing,
      currentTime: this.currentTime,
      pausedTime: this.pausedTime,
      startTime: this.startTime,
      duration: this.duration,
    }
  }

  @Watch('playing')
  startInterval() {
    if (this.playing) {
      this.interval = setInterval(() => {
        this.currentTime = this.video_tag.currentTime
        this.update.emit(this.eventData);
      }, 30);
    } else {
      clearInterval(this.interval)
    }
  }

  setDimensions() {
    this.width = (!this.width) ? this.video_tag.videoWidth : this.width;
    this.height = (!this.height) ? this.video_tag.videoHeight : this.height;

    properties.set({
      "--width": `${this.width}`,
      "--height": `${this.height}`,
      "--aspect-ratio": `${this.height / this.width * 100}%`
    }, this.element);
  }

  in () {
    if (this.autoplay) {
      this.video_tag.play()
    }
  }

  out () {
    this.video_tag.currentTime = 0;
    this.video_tag.pause()
  }

  @Method()
  async getDuration() {
    return this.video_tag.duration
  }

  @Method()
  async play() {
    this.video_tag.play()
  }

  @Method()
  async pause() {
    this.video_tag.pause()
  }

  @Method()
  async toggle() {
    if (this.video_tag.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  @Method()
  async stop() {
    this.skipTo(0)
    this.video_tag.pause()
  }

  @Method()
  async skipTo(time) {
    await this.pause()
    this.video_tag.currentTime = (time * 1000);
    await this.play()
  }

  render () {
    return (
      <video preload={this.preload} width={this.width} height={this.height} autoplay={this.autoplay} muted={this.muted} playsinline={this.playsinline} poster={this.poster} controls={this.controls}>
        <slot />
        <stellar-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)} />
      </video>
      )
    }
  }

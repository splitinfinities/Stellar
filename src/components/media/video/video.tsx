import { Component, Element, State, Prop } from '@stencil/core';
import properties from 'css-custom-properties'

@Component({
  tag: 'stellar-video',
  styleUrl: 'video.css'
})
export class Video {
  @Element() element: HTMLElement;

  @Prop({mutable: true, reflectToAttr: true}) width: number;
  @Prop({mutable: true, reflectToAttr: true}) height: number;

  @Prop() preload: string = "auto";
  @Prop() autoplay: boolean = false;
  @Prop() muted: boolean = false;
  @Prop() playsinline: boolean = false;
  @Prop() poster: string;
  @Prop() controls: boolean = true;
  @Prop() overlay: boolean;

  @State() video: HTMLVideoElement;
  @State() io: IntersectionObserver;

  componentDidLoad() {
    this.video = this.element.querySelector('video');
    this.video.onloadedmetadata = () => { this.setDimensions(); }
    this.addIntersectionObserver();
  }

  setDimensions() {
    this.width = (!this.width) ? this.video.videoWidth : this.width;
    this.height = (!this.height) ? this.video.videoHeight : this.height;

    properties.set({
      "--width": `${this.width}`,
      "--height": `${this.height}`,
      "--aspect-ratio": `${this.height / this.width * 100}%`
    }, this.element);
  }

  addIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.handleInScreen();
        } else {
          this.handleOffScreen();
        }
      }, {
        threshold: [0.25]
      })

      this.io.observe(this.element.querySelector('video'));
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => {
        this.handleInScreen();
      }, 300);
    }
  }

  handleInScreen() {
    this.video.play()
  }

  handleOffScreen() {
    this.video.currentTime = 0;
    this.video.pause()
  }

  render () {
    return (
      <video preload={this.preload} width={this.width} height={this.height} autoplay={this.autoplay} muted={this.muted} playsinline={this.playsinline} poster={this.poster} controls={this.controls}>
        <slot />
      </video>
    )
  }
}

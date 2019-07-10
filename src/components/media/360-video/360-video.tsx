import { Component, Prop, State, Element, h } from '@stencil/core';
import * as Kaleidoscope from "kaleidoscopejs";

@Component({
  tag: 'stellar-360-video',
  styleUrl: '360-video.css'
})
export class Video360 {
  @Element() element: HTMLElement;

  @Prop({reflect: true}) src: string;
  @Prop({reflect: true}) poster: string;
  @Prop({reflect: true}) width: number = 1280;
  @Prop({reflect: true}) height: number = 720;
  @State() viewer: any;
  @State() video: HTMLElement;

  componentDidLoad() {
    this.video = this.element.querySelector(".video")

    this.viewer = new Kaleidoscope.Video({
      source: this.src,
      container: this.video,
      width: this.width,
      height: this.height,
      autoplay: true,
      muted: true,
      loop: true
    });

    this.viewer.render()
    this.viewer.play()
  }

  render () {
    return [
      <div class="video" />,
      <div class="overlay" />
    ];
  }
}

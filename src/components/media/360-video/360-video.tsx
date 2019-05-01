import { Component, Prop, State, Element } from '@stencil/core';
import * as Kaleidoscope from "kaleidoscopejs";

@Component({
  tag: 'stellar-360-video',
  styleUrl: '360-video.css'
})
export class Video360 {
  @Element() element: HTMLElement;

  @Prop({reflectToAttr: true}) src: string;
  @Prop({reflectToAttr: true}) poster: string;
  @Prop({reflectToAttr: true}) width: number = 1280;
  @Prop({reflectToAttr: true}) height: number = 720;
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

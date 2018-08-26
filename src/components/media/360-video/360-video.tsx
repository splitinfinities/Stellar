import { Component, Prop, State, Element } from '@stencil/core';
import * as Kaleidoscope from "kaleidoscopejs";

@Component({
  tag: 'stellar-360-video',
  styleUrl: '360-video.css'
})
export class Video360 {
  @Element() element: HTMLElement;

  @Prop({reflectToAttr: true}) src: string;
  @State() viewer: any;
  @State() video: HTMLElement;

  componentDidLoad() {
    this.video = this.element.querySelector(".video")

    this.viewer = new Kaleidoscope.Video({
      source: this.src,
      container: this.video,
      autoplay: true,
      muted: true,
      loop: true
    });

    this.viewer.render()
    this.viewer.play()
  }

  render () {
    return (
      <div class="video" />
    );
  }
}

import { Component, Prop, State, Element } from '@stencil/core';
import * as Kaleidoscope from "kaleidoscopejs";

@Component({
  tag: 'stellar-360-image',
  styleUrl: '360-image.css'
})
export class Image360 {
  @Element() element: HTMLElement;

  @Prop({reflectToAttr: true}) src: string;
  @Prop({reflectToAttr: true}) poster: string;
  @Prop({reflectToAttr: true}) width: number = 1280;
  @Prop({reflectToAttr: true}) height: number = 720;

  @State() viewer: any;
  @State() image: HTMLElement;

  componentDidLoad() {
    this.image = this.element.querySelector(".image")

    this.viewer = new Kaleidoscope.Image({
      source: this.src,
      container: this.image,
      width: this.width,
      height: this.height,
    });

    this.viewer.render()
  }

  render () {
    return [
      <div class="image" />,
      <div class="overlay" />
    ];
  }
}

import { Component, Prop, State, Element, h } from '@stencil/core';
import * as Kaleidoscope from "kaleidoscopejs";

@Component({
  tag: 'stellar-360-image'
})
export class Image360 {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) src: string;
  @Prop() nolazyload: boolean = false;
  @Prop({ reflect: true }) poster: string;
  @Prop({ reflect: true }) width: number = 1280;
  @Prop({ reflect: true }) height: number = 720;

  @State() viewer: any;
  @State() image: HTMLElement;
  @State() ready: boolean = false;

  componentDidLoad() {
    this.image = this.element.querySelector(".image");

    if (this.nolazyload) {
      this.in()
    }
  }

  in() {
    if (!this.viewer) {
      this.viewer = new Kaleidoscope.Image({
        source: this.src,
        container: this.image,
        width: this.width,
        height: this.height,
      });
    }

    this.viewer.render();
    this.ready = true;
  }

  out() {
    this.viewer.destroy()
    this.ready = false;
  }

  render() {
    return <div>
      <div class="image" />
      <div class="overlay" />
      {!this.nolazyload && <stellar-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)} margin='50%' />}
      {!this.ready && <skeleton-img width={this.width} height={this.height} />}
    </div>
  }
}

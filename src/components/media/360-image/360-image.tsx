import { Component, Prop, State, Element} from '@stencil/core';
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
  @State() io: IntersectionObserver;
  @State() ready: boolean = false;

  componentDidLoad() {
    this.image = this.element.querySelector(".image")
    this.addIntersectionObserver();
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
        rootMargin: '50%',
        threshold: [0]
      })

      this.io.observe(this.element);
    }
  }

  handleInScreen() {
    this.prepare()
  }

  handleOffScreen() {
    this.destroy()
  }

  prepare() {
    this.viewer = new Kaleidoscope.Image({
      source: this.src,
      container: this.image,
      width: this.width,
      height: this.height,
    });

    this.viewer.render();
    this.ready = true;
  }

  destroy() {
    this.viewer.destroy()
    this.ready = false;
  }

  render () {
    return <div>
      <div class="image" />
      <div class="overlay" />
      {!this.ready && <skeleton-img width={this.width} height={this.height} />}
    </div>
  }
}

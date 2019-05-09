import { Component, Prop, Element, h, Watch } from '@stencil/core'
import { properties } from '../../../utils';

@Component({
  tag: 'stellar-follow',
  styleUrl: 'follow.css',
  shadow: true
})
export class Follow {
  @Element() element: HTMLElement;
  @Prop() type: "scroll"|"cursor" = "scroll";
  @Prop() distance: number = 0.5;
  @Prop() padding: number = 40;

  componentWillLoad () {
    this.update()
    properties.set({"--left": `50%`, "--top": `-3000px`}, this.element)
  }

  componentDidLoad () {
    setTimeout(() => {
      this.update()
    }, 200)
  }

  get offset () {
    return window.innerHeight * this.distance
  }

  @Watch('type')
  @Watch('distance')
  update() {
    if (this.type === "scroll") {
      this.attachScroll()
    } else if (this.type === "cursor") {
      this.attachScroll()
      this.attachCursor()
    }
  }

  attachScroll() {
    properties.set({"--top": `${window.pageYOffset + this.offset}px`}, this.element);

    // @ts-ignore
    window.addEventListener("scroll", () => {
      properties.set({"--top": `${window.pageYOffset + this.offset}px`}, this.element)
    }, { passive: true })
  }

  attachCursor() {
    // @ts-ignore
    window.addEventListener("mousemove", (e) => {
      properties.set({"--left": `${this.minmaxx(e.clientX)}px`}, this.element)
    }, { passive: true })

    window.addEventListener("deviceorientation", (e) => {
      const z = Math.abs(e.alpha);
      const value = z / 360;
      const percentage = value * 100;
      properties.set({"--left": `${this.minmaxx(percentage)}px`}, this.element)
    }, true);

  }

  minmaxx(x) {
    let left = (this.padding + (this.element.offsetWidth / 2))
    let right = (window.innerWidth - left);

    if (x <= left) {
      x = left
    } else if (x >= right) {
      x = right;
    }

    return x;
  }

  render() {
    return <slot />
  }
}

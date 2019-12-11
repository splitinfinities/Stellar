import { Component, h, Host, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'stellar-slide',
  styleUrl: 'slide.css'
})
export class Slide {
  @Element() el: HTMLElement;
  @Prop() slideId: number;
  @Prop() width: string = "auto";
  @State() swiper: boolean = false;

  componentWillLoad() {
    this.swiper = (this.el.closest('stellar-slides, stellar-simple-slides').nodeName === "STELLAR-SLIDES");
  }

  render() {
    return <Host style={{'--width': this.width}} class={{
        'slide-zoom': this.swiper,
        'swiper-slide': this.swiper,
      }}>
      <slot />
    </Host>
  }
}

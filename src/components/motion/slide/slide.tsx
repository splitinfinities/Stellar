import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-slide',
  styleUrl: 'slide.css'
})
export class Slide {
  @Prop() slideId: number;

  render() {
    return <Host class={{
        'slide-zoom': true,
        'swiper-slide': true
      }}>
      <slot />
    </Host>
  }
}

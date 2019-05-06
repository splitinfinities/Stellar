import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'stellar-slide',
  styleUrl: 'slide.css'
})
export class Slide {
  render() {
    return <Host class={{
        'slide-zoom': true,
        'swiper-slide': true
      }}>
      <slot />
    </Host>
  }
}

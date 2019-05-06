import { Component } from '@stencil/core';

@Component({
  tag: 'stellar-slide',
  styleUrl: 'slide.css'
})
export class Slide {

  hostData() {
    return {
      class: {
        'slide-zoom': true,
        'swiper-slide': true
      }
    };
  }

  render() {
    return (
      <slot />
    )
  }
}

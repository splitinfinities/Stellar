import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-slide',
  styleUrl: 'slide.scss'
})
export class Slide {

  @Prop() motion: number = 0;

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
      <stellar-blur horizontal={this.motion}>
        <slot />
      </stellar-blur>
    )
  }
}

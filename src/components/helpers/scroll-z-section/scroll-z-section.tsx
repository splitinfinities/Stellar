import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'stellar-scroll-z-section'
})
export class ScrollZSection {
  @Element() element: HTMLElement;

  render () {
    return <slot />
  }
}

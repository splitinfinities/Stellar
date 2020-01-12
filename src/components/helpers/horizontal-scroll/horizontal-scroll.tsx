import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'horizontal-scroll',
  styleUrl: 'horizontal-scroll.css',
  shadow: true
})
export class HorizontalScroll {
  @Element() el: HTMLElement;

  render() {
    return (
      <Host style={{ "--scroll-height": `${this.el.offsetWidth}px` }}>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }

}

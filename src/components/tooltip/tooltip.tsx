import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-tooltip',
  styleUrl: 'tooltip.css',
})
export class Tooltip {
  @Element() element: HTMLElement;

  @Prop({reflectToAttr: true}) align: "left"|"center"|"right" = "center";

  render() {
    return (
      <div class="wrap">
        <div class="after"></div>
        <slot></slot>
      </div>
    );
  }
}

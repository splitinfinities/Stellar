import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'stellar-tooltip',
  styleUrl: 'tooltip.css',
  shadow: true
})
export class Tooltip {
  @Element() element: HTMLElement;

  @Prop({reflectToAttr: true}) align: "left"|"center"|"right"|"middle-left"|"middle-center"|"middle-right"|"bottom-left"|"bottom-center"|"bottom-right" = "center";
  @Prop({reflectToAttr: true}) focused: boolean = false;

  render() {
    return (
      <div class="wrap">
        <div class="after"></div>
        <slot></slot>
      </div>
    );
  }
}

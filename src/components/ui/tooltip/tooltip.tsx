import { Component, Element, Prop, h } from '@stencil/core';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-tooltip',
  styleUrl: 'tooltip.css',
  shadow: true
})
export class Tooltip {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) align: "left" | "center" | "right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right" = "center";
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop({ reflect: true }) focused: boolean = false;

  render() {
    return (
      <div class="wrap">
        <div class="after"></div>
        <slot></slot>
      </div>
    );
  }
}
Tunnel.injectProps(Tooltip, ['dark']);

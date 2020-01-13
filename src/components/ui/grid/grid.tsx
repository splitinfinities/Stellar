import { Component, Prop, Element, Method, h, Host } from '@stencil/core';
import { default as eqjs } from 'eq.js';

@Component({
  tag: 'stellar-grid',
  styleUrl: 'grid.css',
  shadow: true
})
export class Grid {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) cols: number | string = "auto";
  @Prop({ reflect: true }) compact: boolean = false;
  @Prop({ reflect: true }) padding: boolean = false;
  @Prop({ reflect: true }) align: string = "items-start";
  @Prop({ reflect: true }) noresponsive: boolean = false;

  async makeResponsive() {
    if (!this.noresponsive) {
      eqjs.definePts(this.element, {
        "tiny": 320,
        "small": 480,
        "medium": 640,
        "large": 800,
        "massive": 1024
      });

      this.refresh();
    }
  }

  componentWillLoad() {
    this.makeResponsive()
  }

  componentDidLoad() {
    this.makeResponsive()
  }

  @Method()
  async refresh() {
    var resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initEvent('resize', true, false);
    window.dispatchEvent(resizeEvent);
  }

  render() {
    return <Host class={`${this.align}`}>
      <slot></slot>
    </Host>
  }
}

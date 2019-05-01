import { Component, Prop, Element, Method, Event, EventEmitter, State } from '@stencil/core';
import { default as eqjs } from 'eq.js';
import Sortable from '@shopify/draggable/lib/sortable';
import SwapAnimation from '@shopify/draggable/lib/plugins/swap-animation';

@Component({
  tag: 'stellar-grid',
  styleUrl: 'grid.css',
  shadow: false
})
export class Grid {
  @Element() element: HTMLElement;

  @Prop({reflectToAttr: true}) cols: number|string = "auto";
  @Prop({reflectToAttr: true}) compact: boolean = false;
  @Prop({reflectToAttr: true}) padding: boolean = false;
  @Prop({reflectToAttr: true}) align: string = "items-start";
  @Prop({reflectToAttr: true}) responsive: boolean|string = true;

  @Prop() swappable: boolean = false;
  @Prop() swappableSelector: string = "stellar-card";

  @Event() orderChanged: EventEmitter;

  @State() order: string[];
  @State() __swappable;

  async makeResponsive() {
    if (this.responsive && this.responsive !== "false") {
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

  async makeSwappable() {
    if (this.swappable) {
      this.__swappable = new Sortable(this.element.querySelectorAll('.grid'), {
        draggable: this.swappableSelector,
        delay: 350,
        swapAnimation: {
          duration: 200,
          easingFunction: 'ease-in-out',
          horizontal: true,
          vertical: true
        },
        plugins: [SwapAnimation]
      });

      this.__swappable.on('swappable:start', () => { this.refresh(); });
      this.__swappable.on('swappable:stop', () => { this.updateOrder(); });
    }
  }

  async updateOrder() {
    const elements = this.element.querySelectorAll(this.swappableSelector);
    const order = [];

    Array.from(elements).forEach((element) => {
      order.push(element.id);
    })
    this.order = order;

    this.orderChanged.emit(this.order)
  }

  componentWillLoad() {
    this.makeResponsive()
    this.makeSwappable()
  }

  componentDidLoad() {
    this.makeResponsive()
    this.makeSwappable()
  }

  @Method()
  async refresh() {
    var resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
  }

  render() {
    return <div class={`grid ${this.align}`}>
      <slot></slot>
    </div>
  }
}

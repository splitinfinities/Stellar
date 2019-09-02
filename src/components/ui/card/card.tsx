import { Component, Prop, State, Element, Event, EventEmitter, Method, h } from '@stencil/core';
import { properties, ResizeObserver } from '../../../utils'
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-card',
  styleUrl: 'card.css',
  shadow: true
})
export class Card {
  @Element() element: HTMLElement;

  /**
   * Renders a shadow on the card
   */
  @Prop() shadow: "light"|"medium"|"heavy" = "medium";

  /**
   * Let's a card be flippable
   */
  @Prop({ reflect: true }) flippable: boolean = false;

  /**
   * Renders a flipped card
   */
  @Prop({ mutable: true, reflect: true }) flipped: boolean = false;

  /**
   * Sets the padding inside of the button. Can be small, medium, or large.
   */
  @Prop({ reflect: true }) padding: "none"|"tiny"|"small"|"medium"|"large" = "medium";

  /**
   * Sets the element to render the card as - an anchor tag, a button, or a div.
   */
  @Prop() tag: "stencil-route-link"|"a"|"button"|"div" = "div";

  /**
   * Sets the type on a button
   */
  @Prop() type: string;

  /**
   * Sets the href if the card is a link.
   */
  @Prop() href: string = "#";

  /**
   * Sets the name if the card is a button.
   */
  @Prop() name: string = "";

  /**
   * Sets the value if the card is a button.
   */
  @Prop() value: string = "#";

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() for: string;

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() flip_icon: string = "cog";

  @Prop({reflect: true}) dark: boolean = false;

  @State() ro: ResizeObserver;

  @Event() flip: EventEmitter;

  componentDidLoad() {
    this.updateFlippableCardHeight();
    this.addResizeObserver();
  }

  addResizeObserver() {
    this.ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const {width} = entry.contentRect;
        properties.set({'--card-width': `${width}px`}, entry.target)
      }
    });

    this.ro.observe(this.element);
  }

  updateFlippableCardHeight () {
    if (this.flippable) {
      const front: HTMLElement = this.element.shadowRoot.querySelector('.front');
      const front_height = front.offsetHeight;
      properties.set({'--min-height': `${front_height}px`}, this.element)

      const back: HTMLElement = this.element.shadowRoot.querySelector('.back');
        const back_height = back.scrollHeight;
      properties.set({'--flipped-min-height': `${back_height + 50}px`}, this.element)
    }
  }

  async click() {
    if (this.for) {
      const target = this.for.split(":");

      if (target[0] === "modal") {
        // @ts-ignore
        const modal: HTMLStellarModalElement = document.querySelector(`stellar-modal[name="${target[1]}"]`);
        modal.open();
      }
    }

    return true;
  }

  @Method()
  async flip_card(e?: UIEvent) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    if (this.flippable) {
      this.flipped = !this.flipped
      this.flip.emit();
    }
  }

  render() {
    const childProps = {
      href: this.href,
      url: this.href,
      name: this.name,
      value: this.value,
      type: this.type
    };

    // @ts-ignore
    return (<this.tag {...childProps} class={"stencil-route-link" !== this.tag ? "wrap" : ""} anchorClass={"stencil-route-link" === this.tag ? "wrap" : ""} onClick={(e) => { this.click(e) }}>
        { this.flippable && [
            <stellar-button tag="button" ghost class="flip-button" onClick={(e) => { e.stopPropagation(); e.preventDefault(); this.flip_card(e) }}>
              <stellar-asset name={this.flipped ? "close" : this.flip_icon} class="ma0" />
            </stellar-button>,
            <div class="front">
              <slot></slot>
            </div>,
            <div class="back">
              <slot name="back"></slot>
            </div>] }
        { !this.flippable && <slot></slot> }
      </this.tag>
    );
  }
}
Tunnel.injectProps(Card, ['dark']);

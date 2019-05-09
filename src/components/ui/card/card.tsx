import { Component, Prop, State, Element, Event, EventEmitter, Method} from '@stencil/core';
import { properties, ResizeObserver } from '../../../utils'

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
  @Prop() shadow: string|"light"|"medium"|"heavy" = "medium";

  /**
   * Let's a card be flippable
   */
  @Prop({ reflectToAttr: true }) flippable: boolean = false;

  /**
   * Renders a flipped card
   */
  @Prop({ mutable: true, reflectToAttr: true }) flipped: boolean = false;

  /**
   * Sets the padding inside of the button. Can be small, medium, or large.
   */
  @Prop({ reflectToAttr: true }) padding: string|"small"|"medium"|"large" = "medium";

  /**
   * Sets the element to render the card as - an anchor tag, a button, or a div.
   */
  @Prop() tag: "stencil-route-link"|"a"|"button"|"div" = "div";

  /**
   * Sets the element to render the card as - an anchor tag, a button, or a div.
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

  @State() width: number;
  @State() height: number;
  @State() middleX: number;
  @State() middleY: number;
  @State() rotationLimit: number = 0.75;

  @State() ro: ResizeObserver;

  @Prop({reflectToAttr: true, mutable: true}) transition: boolean = false;

  @Event() flip: EventEmitter;

  refresh() {
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.middleX = this.width / 2;
    this.middleY = this.height / 2;
  }

  componentDidLoad() {
    if (this.tag === "a") {
      setTimeout(() => { this.refresh(); }, 10);

      this.element.addEventListener('mouseenter', this.addRotation.bind(this))
      this.element.addEventListener('mousemove', this.animateRotation.bind(this))
      this.element.addEventListener('mouseleave', this.removeRotation.bind(this))
    }

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

  addRotation () {
    this.refresh()

    this.transition = true;

    setTimeout(() => {
      this.transition = false;
    }, 250)
  }

  async animateRotation(event) {
    const x = event.offsetX
    const y = event.offsetY
    const rotateX = (x - this.middleX) * (this.rotationLimit / this.middleX)
    const rotateY = (this.middleY - y) * (this.rotationLimit / this.middleY)

    properties.set({
      "--card-transform": `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
      "--card-hover-top": `${(rotateY / this.rotationLimit)}rem`,
      "--card-hover-right": `${((rotateX / this.rotationLimit) * -1)}rem`
    }, this.element)
  }

  async removeRotation() {
    this.refresh()

    this.transition = true;

    setTimeout(() => {
       this.transition = false;
        properties.set({
          "--card-transform": `rotateX(0deg) rotateY(0deg)`,
          "--card-hover-top": `0px`,
          "--card-hover-right": `0px`
        }, this.element)
    }, 250)
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

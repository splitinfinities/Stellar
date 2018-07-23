import { Component, Prop, State, Element } from '@stencil/core';
import properties from 'css-custom-properties'

@Component({
  tag: 'stellar-card',
  styleUrl: 'card.css'
})
export class Card {
  @Element() element: HTMLElement;

  /**
   * Renders a shadow on the card
   */
  @Prop() shadow: string|"light"|"medium"|"heavy" = "medium";

  /**
   * Sets the padding inside of the button. Can be small, medium, or large.
   */
  @Prop({reflectToAttr: true}) padding: string|"small"|"medium"|"large" = "medium";

  /**
   * Sets the element to render the card as - an anchor tag, a button, or a div.
   */
  @Prop() tag: "a"|"button"|"div" = "div";

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

  @State() width: number;
  @State() height: number;
  @State() middleX: number;
  @State() middleY: number;
  @State() rotationLimit: number = 0.75;

  @Prop({reflectToAttr: true, mutable: true}) transition: boolean = false;

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
  }

  addRotation() {
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
        const modal: HTMLStellarModalElement = document.querySelector(`stellar-modal[name="${target[1]}"]`);
        modal.open();
      }
    }

    return true;
  }

  render() {
    const childProps = {
      href: this.href,
      name: this.name,
      value: this.value
    };

    return (
      <this.tag {...childProps} class="item" onClick={() => { this.click() }}>
        <slot></slot>
      </this.tag>
    );
  }
}

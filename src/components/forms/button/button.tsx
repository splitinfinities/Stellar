import { Component, Prop, State, Element, h } from '@stencil/core';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  @Element() element: HTMLElement;

  /**
   * Allows the button to render for different tags.
   */
  @Prop() tag: "button"|"submit"|"link"|"span"|"route-link"|"pjax" = "link";

  /**
   * Sets accessibility options on the buttons
   */
  @Prop() label: string = 'Submit';

  /**
   * Sets the name on the button if the button is an input. Allows the button to act as an item in a form.
   */
  @Prop() name: string = '';

  /**
   * Sets the value on the button if the button is an input.
   */
  @Prop() value: string = '';

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() href: string = '#';

  /**
   * Sets the href on the anchor tag if the button is a link.
   */
  @Prop() for: string;

  /**
   * Sets the target on the anchor tag if the button is a link.
   */
  @Prop() target: string = '_self';

  /**
   * Sets the size of the button. Can be tiny, small, medium, or large.
   */
  @Prop({reflect: true}) size: "tiny"|"small"|"medium"|"large";

  /**
   * Sets the padding inside of the button. Can be small, medium, or large.
   */
  @Prop({reflect: true}) padding: "tiny"|"small"|"medium"|"large";

  /**
   * Sets the button or link as a button with only an icon.
   */
  @Prop({reflect: true, mutable: true}) icon: boolean = false;

  /**
   * Sets the button or link as an active state.
   */
  @Prop({reflect: true}) active: boolean = false;

  /**
   * Sets the button or link as disabled and not-interactable.
   */
  @Prop({reflect: true}) disabled: boolean = false;

  /**
   * Sets the button or link to provide the affordance of a dangerous action.
   */
  @Prop({reflect: true}) danger: boolean = false;

  /**
   * Sets the button or link to render as a pill.
   */
  @Prop({reflect: true}) pill: boolean = false;

  /**
   * Sets the button or link to render at full width to the parent.
   */
  @Prop({reflect: true}) block: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({reflect: true}) outline: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({reflect: true}) invert: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({reflect: true}) contrast: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({reflect: true}) dark: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({reflect: true}) pjax: boolean = false;

  /**
   * Sets the button or link as processing when clicked.
   */
  @Prop() processable: boolean = false;
  @State() processing: boolean = false;

  @Prop({reflect: true}) ghost: boolean = false;

  componentWillLoad() {
    if (!this.element.getAttribute("title")) {
      this.label = this.element.innerText
    } else {
      this.label = this.element.getAttribute("title");
    }

    this.icon = this.element.querySelectorAll('stellar-asset').length > 0;
  }

  async click() {
    if (this.processable) {
      this.processing = true;
    }

    if (this.for) {
      const target = this.for.split(":");

      if (target[0] === "modal") {
        // @ts-ignore
        const modal: HTMLStellarModalElement = document.querySelector(`stellar-modal[name="${target[1]}"]`);
        modal.open();
      }
    }

    if (this.tag === "submit") {
      // @ts-ignore
      this.element.closest('stellar-form').submit_form();
    }

    if (this.tag === "link") {
      window.location.href = this.href;
    }

    if (this.tag === "pjax") {
      document.querySelector('stellar-pjax').pjax.loadUrl(this.href)
    }

    return true;
  }

  renderSVG() {
    return (
      <stellar-asset src="Loading" color="white"></stellar-asset>
    )
  }

  renderButton() {
    return (
      <button type="button" class="button" title={this.label} disabled={this.disabled} onClick={() => { this.click() }}>
        <div class="content"><slot>Submit</slot></div>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </button>
    );
  }

  renderSubmit() {
    return (
      <button type="submit" class="button" title={this.label} disabled={this.disabled} name={this.name} value={this.value} onClick={() => { this.click() }}>
        <div class="content"><slot>Submit</slot></div>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </button>
    );
  }

  renderLink() {
    return (
      <a href={this.href} target={this.target} class="button" data-disabled={this.disabled} title={this.label} onClick={() => { this.click() }}>
        <div class="content"><slot>Submit</slot></div>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </a>
    );
  }

  renderAppLink() {
    return (
      <stencil-route-link url={this.href} anchorClass="button" data-disabled={this.disabled} title={this.label} onClick={() => { this.click() }}>
        <div class="content"><slot>Submit</slot></div>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </stencil-route-link>
    );
  }

  renderSpan() {
    return (
      <span class="button" title={this.label} data-disabled={this.disabled} aria-label={`Button ${this.label} ${this.element.textContent}`} tabIndex={0} onClick={() => { this.click() }}>
        <div class="content"><slot>Submit</slot></div>
        {this.processing && <div class="processing">{this.renderSVG()}</div>}
      </span>
    );
  }

  render() {
    return [
      this.tag === "button" && this.renderButton(),
      this.tag === "submit" && this.renderSubmit(),
      this.tag === "link" && this.renderLink(),
      this.tag === "route-link" && this.renderAppLink(),
      this.tag === "span" && this.renderSpan(),
      this.tag === "pjax" && this.renderSpan()
    ]
  }
}

Tunnel.injectProps(Button, ['dark']);

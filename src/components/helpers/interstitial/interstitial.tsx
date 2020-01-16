import { Component, Host, h, Prop, Element, Listen, State } from '@stencil/core';

@Component({
  tag: 'stellar-interstitial',
  styleUrl: 'interstitial.css',
  shadow: true
})
export class Interstitial {
  @Element() el: HTMLElement;

  @Prop({ reflect: true }) fullscreen: boolean;
  @Prop({ reflect: true }) shown: boolean = true;
  @Prop({ reflect: true }) remember: boolean;

  @State() hash: string = "";

  componentWillLoad() {
    this.hash = btoa(unescape(encodeURIComponent(this.el.innerText)));

    if (this.remember && localStorage.getItem(this.hash)) {
      this.shown = !(localStorage.getItem(this.hash) === "hidden");
    }
  }

  @Listen("submitted")
  handleClose() {
    this.shown = false;

    if (this.remember) {
      localStorage.setItem(this.hash, "hidden")
    }
  }

  render() {
    return (
      <Host class={`${this.shown ? "show" : "hide"}`}>
        <slot></slot>
      </Host>
    );
  }
}

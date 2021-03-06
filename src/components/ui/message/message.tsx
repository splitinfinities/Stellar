import { Component, Prop, State, Element, h, Host } from '@stencil/core';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-message',
  styleUrl: 'message.css',
  shadow: true
})
export class Message {
  @Element() element: HTMLElement;
  @Prop() type: "alert"|"error"|"info"|"success";
  @Prop({reflect: true}) size: "full"|"default";
  @Prop() closable: boolean = true;
  @Prop() remember: boolean = true;
  @Prop({mutable: true, reflect: true}) name: string = "stellar";
  @Prop({mutable: true, reflect: true}) shown: boolean = true;
  @Prop({reflect: true}) striped: boolean = false;
  @Prop({reflect: true}) dark: boolean = false;
  @State() theme: string = "gray";

  componentWillLoad () {
    if (this.remember) {
      const string = this.element.innerHTML;
      this.name = this.name + "_" + btoa(unescape(encodeURIComponent(string)));

      if (localStorage.getItem(this.name)) {
        this.shown = !(localStorage.getItem(this.name) === "hidden");
      }
    }

    switch (this.type) {
      case "alert":
        this.theme = "yellow"
        break;
      case "error":
        this.theme = "red"
        break;
      case "info":
        this.theme = "cyan"
        break;
      case "success":
        this.theme = "green"
        break;
    }
  }

  handleClose() {
    this.shown = false;

    if (this.remember) {
      localStorage.setItem(this.name, "hidden")
    }
  }

  render() {
    return <Host class={`theme-${this.theme} ${this.shown ? "db" : "dn"}`}>
      <div class="wrap">
        <slot></slot>
        {this.closable && <button aria-label="Close" onClick={() => { this.handleClose() }}>
          <stellar-asset name="close" />
        </button>}
      </div>
    </Host>
  }
}
Tunnel.injectProps(Message, ['dark']);

import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'stellar-message',
  styleUrl: 'message.css'
})
export class Message {
  @Element() element: HTMLElement;
  @Prop() type: "alert"|"error"|"info"|"success";
  @Prop({reflectToAttr: true}) size: "full"|"default";
  @Prop() closable: boolean = true;
  @Prop() remember: boolean = false;
  @Prop({mutable: true, reflectToAttr: true}) name: string = "stellar";
  @Prop({mutable: true, reflectToAttr: true}) visible: boolean = (localStorage.getItem(this.name) !== "false");
  @Prop({reflectToAttr: true}) striped: boolean = false;
  @State() theme: string = "gray";

  componentWillLoad () {
    if (this.remember) {
      const string = this.element.innerHTML;
      this.name = this.name + "_" + btoa(unescape(encodeURIComponent(string)));

      if (localStorage.getItem(this.name)) {
        this.visible = (localStorage.getItem(this.name) !== "false")
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

  hostData() {
    return {
      class: `theme-${this.theme}`
    }
  }

  handleClose() {
    this.visible = false;

    if (this.remember) {
      localStorage.setItem(this.name, "false")
    }
  }

  render() {
    return (
      <div class="wrap">
        <slot></slot>
        <stellar-button icon label="Close" onClick={() => { this.handleClose() }}>
          <stellar-asset name="close" />
        </stellar-button>
      </div>
    )
  }
}

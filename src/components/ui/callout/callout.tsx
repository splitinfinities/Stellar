import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'stellar-callout',
  styleUrl: 'callout.css'
})
export class Callout {
  @Prop() type: "alert"|"error"|"info"|"success";
  @State() theme: string = "gray";

  hostData() {
    return {
      class: `theme-${this.theme}`
    }
  }

  componentWillLoad() {
    switch(this.type) {
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

  render () {
    return (
      <div class="callout-wrap">
        <slot />
      </div>
    );
  }
}

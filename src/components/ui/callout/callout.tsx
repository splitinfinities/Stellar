import { Component, Prop, State, Element, Watch, h } from '@stencil/core';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-callout',
  styleUrl: 'callout.css',
  shadow: true
})
export class Callout {
  @Element() element: HTMLElement;

  @Prop({reflect: true}) dark: boolean = false;
  @Prop() type: "alert"|"error"|"info"|"success"|"default" = "default";
  @State() theme: string = "gray";

  componentDidLoad() {
    this.element.setAttribute('aria-label', `An ${this.type} message. ${this.element.textContent}`);
    this.element.setAttribute('aria-role', "status");
    this.element.setAttribute('tabindex', `0`);
    this.handleType();
    this.handleTheme();
  }

  @Watch('theme')
  handleTheme() {
    this.element.classList.forEach((c: string) => {
      if (c.startsWith('theme-')) {
        this.element.classList.remove(c);
      }
    });

    this.element.classList.add(`theme-${this.theme}`)
  }

  @Watch('type')
  handleType() {
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
      case "default":
      case undefined:
        this.theme = "gray"
        break;
      default:
        this.theme = "gray"
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

Tunnel.injectProps(Callout, ['dark']);

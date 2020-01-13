import { Component, Prop, Element, h } from '@stencil/core';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-breadcrumb',
  styleUrl: 'breadcrumb.css',
  shadow: true
})

export class Breadcrumb {
  @Element() element: HTMLElement;

  @Prop() color: string;
  @Prop() href: string = "/";
  @Prop() tag: "link" | "route" = "link";
  @Prop() target: string = "_self";
  @Prop({ mutable: true }) label: string = "Breadcrumb link";
  @Prop() disabled: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;

  @Prop({ reflect: true }) first: boolean;
  @Prop({ reflect: true }) last: boolean;

  componentDidLoad() {
    this.label += ` for ${this.element.textContent}`
  }

  getTag() {
    if (this.tag === "link") {
      return "a"
    }

    if (this.tag === "route") {
      return "stencil-route-link"
    }
  }

  render() {
    const Tag = this.getTag();

    // @ts-ignore
    return <Tag class="button" href={this.href} url={this.href} target={this.target} aria-label={this.label} title={this.label} data-disabled={this.disabled}>
      <slot></slot>
    </Tag>
  }
}
Tunnel.injectProps(Breadcrumb, ['dark']);

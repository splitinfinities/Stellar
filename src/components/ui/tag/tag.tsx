import { Component, Prop, Element, h } from '@stencil/core';
import properties from 'css-custom-properties';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-tag',
  styleUrl: 'tag.css',
  shadow: true
})
export class Tag {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) size: string;
  @Prop({ reflect: true }) pill: boolean = false;
  @Prop({ reflect: true }) outline: boolean = false;
  @Prop({ reflect: true }) dark: boolean = false;
  @Prop() color: string = "cyan5";
  @Prop() textColor: string = "white";

  componentWillLoad() {
    properties.set({
      '--background-color': `var(--${this.color})`,
      '--color': `var(--${this.textColor})`,
    }, this.element)
  }

  render() {
    return (
      <stellar-label class="tag" size={this.size}>
        <slot></slot>
      </stellar-label>
    );
  }
}
Tunnel.injectProps(Tag, ['dark']);

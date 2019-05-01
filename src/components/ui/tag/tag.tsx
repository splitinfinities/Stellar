import { Component, Prop, Element } from '@stencil/core';
import properties from 'css-custom-properties';

@Component({
  tag: 'stellar-tag',
  styleUrl: 'tag.css',
  shadow: true
})
export class Tag {
  @Element() element: HTMLElement;

  @Prop({reflectToAttr: true}) size: string;
  @Prop({reflectToAttr: true}) pill: boolean = false;
  @Prop({reflectToAttr: true}) outline: boolean = false;
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
      <stellar-label class="tag">
        <slot></slot>
      </stellar-label>
    );
  }
}

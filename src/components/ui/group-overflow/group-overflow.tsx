import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-group-overflow',
  styleUrl: 'group-overflow.css',
  shadow: true
})
export class GroupOverflow {
  @Element() element: HTMLElement;

  @Prop() count: number;
  @Prop({mutable: true, reflectToAttr: true}) size: string = "medium";

  render() {
    return (
      <div class="wrapper">
        <div class="content">
          <div class="count">+{this.count} more</div>
          <div class="spacer"></div>
        </div>
        <stellar-tooltip>
          <slot></slot>
        </stellar-tooltip>
      </div>
    );
  }
}

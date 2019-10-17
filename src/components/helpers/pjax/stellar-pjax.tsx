import { Component, Host, h, Prop } from '@stencil/core';
import Pjax from 'pjax';

@Component({
  tag: 'stellar-pjax',
  shadow: true
})
export class StellarPjax {

  @Prop() pjax: any = new Pjax({
    cacheBust: false,
    selectors: [
      "title",
      "meta[name=description]",
      "main",
    ]
  });

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

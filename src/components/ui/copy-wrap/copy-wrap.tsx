import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'copy-wrap',
  styleUrl: 'copy-wrap.css',
  shadow: true
})
export class CopyWrap {
  @Prop({reflect: true}) align: string = "left";
  @Prop({reflect: true}) full: boolean = false;

  render () {
    return <slot />;
  }
}

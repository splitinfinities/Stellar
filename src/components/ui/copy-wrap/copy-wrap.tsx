import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'copy-wrap',
  styleUrl: 'copy-wrap.css',
  shadow: true
})
export class CopyWrap {
  @Prop({reflectToAttr: true}) align: string = "left";
  @Prop({reflectToAttr: true}) full: boolean = false;

  render () {
    return (
      <slot />
    );
  }
}

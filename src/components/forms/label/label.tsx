import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-label',
  styleUrl: 'label.css',
  shadow: true
})
export class Label {
  @Prop() for: string;
  @Prop({reflectToAttr: true}) underneath: boolean;
  @Prop({reflectToAttr: true}) size: string;

  render() {
    // @ts-ignore
    return <label for={this.for}><slot /></label>
  }
}

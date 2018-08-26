import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-label',
  styleUrl: 'label.css'
})
export class Label {
  @Prop() for: string;

  render() {
    // @ts-ignore
    return (<label for={this.for}>
        <slot />
      </label>
    );
  }
}

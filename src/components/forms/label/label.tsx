import { Component, Prop, h } from '@stencil/core';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-label',
  styleUrl: 'label.css',
  shadow: true
})
export class Label {
  @Prop() for: string;
  @Prop({ reflect: true }) underneath: boolean;
  @Prop({ reflect: true }) size: string;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  render() {
    // @ts-ignore
    return <label for={this.for}><slot /></label>
  }
}

Tunnel.injectProps(Label, ['dark']);

import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-header',
  styleUrl: 'header.css'
})
export class Header {
  @Prop() invert: boolean = false;
  @Prop() mark: string;
  @Prop() max: number = 10;
  @Prop() value: number = 0;

  render() {
    return [
        <div class="content">
          <stellar-starscape></stellar-starscape>
          <div class="left">
            <slot name="left">
              <div class="logo">
                <h1 class="white">🌌&nbsp;Stellar!</h1>
              </div>
            </slot>
          </div>
          <div class="right">
            <slot></slot>
          </div>
        </div>,
        <stellar-progress max={this.max} value={this.value} slender={true}></stellar-progress>
    ];
  }
}

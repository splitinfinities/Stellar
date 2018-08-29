import { Component, Prop, State, Element } from '@stencil/core'
import { blurringEase } from '../../../global/helpers';

@Component({
  tag: 'stellar-animate-text',
  styleUrl: 'animate-text.css'
})
export class AnimateText {
  @Element() element: HTMLElement
  @Prop() method: string|"glitch"|"lettering"|"weight"|"fade" = "lettering"
  @State() verticalBlur: number = 0;
  @State() horizontalBlur: number = 0;

  blurHorizontal() {
    blurringEase((e: number) => {
      this.horizontalBlur = e * 4
    }, 450, 0, 'exponential', { invert: true })
  }

  blurVertical() {
    blurringEase((e: number) => {
      this.verticalBlur = e * 4
    }, 450, 0, 'exponential', { invert: true })
  }

  componentWillLoad() {
    if (this.method === "lettering") {
      this.horizontalBlur = 4;
    }
  }

  componentDidLoad() {
    if (this.method === "lettering") {
      this.blurHorizontal();
    }
  }

  render() {
    return (
      <stellar-blur vertical={this.verticalBlur} horizontal={this.horizontalBlur}>
        <slot></slot>
      </stellar-blur>
    )
  }
}








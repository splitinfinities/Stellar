import { Component, Element, Prop } from '@stencil/core'

@Component({
  tag: 'stellar-scatter',
  styleUrl: 'scatter.css'
})
export class Accordion {
  @Element() element: HTMLElement

  @Prop({reflectToAttr: true}) float: boolean = false;
  @Prop() scatter: number = 2
  @Prop() min: number = -10
  @Prop() max: number = 10

  componentWillLoad() {
    const particles = this.element.querySelectorAll('*');

    Array.from(particles).forEach((element) => {
      const top = this.randomNumber()
      const left = this.randomNumber();
      element.setAttribute('style', `top: ${top}%; left: ${left}%`)
    })
  }

  randomNumber() {
    return this.min + Math.random()*(this.max+1 - this.min)
  }

  render() {
    return (
      <slot></slot>
    )
  }
}

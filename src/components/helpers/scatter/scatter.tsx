import { Component, Element, Prop } from '@stencil/core'

@Component({
  tag: 'stellar-scatter',
  styleUrl: 'scatter.css',
  shadow: true
})
export class Scatter {
  @Element() element: HTMLElement

  @Prop({reflectToAttr: true}) float: boolean = false;
  @Prop() min: number = 0
  @Prop() max: number = 100

  @Prop() sizes: boolean = false
  @Prop() colors: boolean = false

  componentWillLoad() {
    const particles = this.element.querySelectorAll('*');

    Array.from(particles).forEach((element) => {
      const top = this.randomFloat()
      const left = this.randomFloat();
      element.setAttribute('style', `top: ${top}%; left: ${left}%`)

      if (this.colors) {
        element.classList.add(`fs${this.fontScale()}`)
      }

      if (this.sizes) {
        element.classList.add(`theme-${this.colorSwatch()}${this.colorScale()}`)
      }
    })
  }

  randomFloat() {
    return this.min + Math.random()*(this.max+1 - this.min)
  }

  randomNumber(max = 2) {
    return  Math.floor(Math.random() * max) + 1
  }

  fontScale() {
    return this.randomNumber(6)
  }

  colorScale() {
    return this.randomNumber(10)
  }

  colorSwatch() {
    return this.randomNumber() === 1 ? "base" : "complement"
  }

  render() {
    return (
      <slot></slot>
    )
  }
}

import { Component, Prop, Element } from '@stencil/core'
import properties from 'css-custom-properties'

@Component({
  tag: 'stellar-quick-actions',
  styleUrl: 'quick-actions.css',
})
export class QuickActions {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false

  componentDidLoad() {
    const width = this.element.querySelector('.wrap').scrollWidth

    properties.set({
      "--shelf-width": `${width}px`
    }, this.element)
  }

  handleClick() {
    this.open = !this.open
  }

  render() {
    return (
      <div class="wrap">
        <div class="actions">
          <slot></slot>
        </div>
        <button class="button" onClick={() => this.handleClick()}>
          <stellar-asset name="arrow"></stellar-asset>
        </button>
      </div>
    )
  }
}

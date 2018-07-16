import { Component, Element, Prop, State } from '@stencil/core'
import focusWithin from 'focus-within'
import Easing from 'easing'

focusWithin(document)

@Component({
  tag: 'stellar-dropdown',
  styleUrl: 'dropdown.css'
})
export class Dropdown {
  @Element() element: HTMLElement

  @Prop() position: "left"|"center"|"right" = "center"
  @Prop() icon: boolean = false
  @Prop() label: string = "Dropdown"
  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false

  @State() blur: number = 0
  @State() timeout: any;

  componentDidLoad() {
    focusWithin(document)
  }

  onToggle() {
    this.open = !this.open

    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout)

      const blurEvent = Easing.event(30, 'linear', { duration: 220, endToEnd: false, invert: this.open })
      blurEvent.on('data', (data: number) => {
        this.blur = data * 10
      })
    }, (this.open ? 30 : 100))
  }

  render() {
    return (
      <div aria-label={this.label} class="dropdown" title={this.label} onMouseEnter={() => { this.onToggle() }} onMouseLeave={() => { this.onToggle() }}>
        <div class="toggle">
          <slot name="handle"></slot>
          { !this.icon && <stellar-asset name="arrow-down" class="caret"></stellar-asset> }
        </div>
        <stellar-blur vertical={this.blur}>
          <div class="list-wrap">
            <ul class="list">
              <slot></slot>
              <div class="footer">
                <slot name="footer"></slot>
              </div>
            </ul>
          </div>
        </stellar-blur>
      </div>
    )
  }
}

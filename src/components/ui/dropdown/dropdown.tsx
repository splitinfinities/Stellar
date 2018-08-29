import { Component, Element, Prop, State, Watch } from '@stencil/core'
import focusWithin from 'focus-within'
import { blurringEase } from '../../../global/helpers';

focusWithin(document)

@Component({
  tag: 'stellar-dropdown',
  styleUrl: 'dropdown.css'
})
export class Dropdown {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflectToAttr: true}) position: "left"|"center"|"right" = "center"
  @Prop() icon: boolean = false
  @Prop() label: string = "Dropdown"
  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false

  @State() blur: number = 0
  @State() timeout: any;

  componentDidLoad() {
    focusWithin(document)
  }

  @Watch("open")
  observeOpen() {
    blurringEase((data) => {
      this.blur = data * 4
    }, 220, 0, 'linear',{ endToEnd: false, invert: this.open })
  }

  onToggle() {
    this.open = !this.open
  }

  render() {
    return (
      <div aria-label={this.label} class="dropdown" title={this.label}>
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

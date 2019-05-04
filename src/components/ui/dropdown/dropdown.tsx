import { Component, Element, Prop, State, Watch, h } from '@stencil/core'
import { blurringEase, focusWithin } from '../../../utils';

focusWithin(document)

@Component({
  tag: 'stellar-dropdown',
  styleUrl: 'dropdown.css',
  shadow: true
})
export class Dropdown {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflectToAttr: true}) position: "left"|"center"|"right" = "center"
  @Prop() icon: boolean = false
  @Prop() label: string = "Dropdown"
  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false
  @State() ease: TweenInstance = blurringEase({
    end: 10,
    start: -1,
    duration: 250,
    tick: (args) => {
      this.blur = args.value;
    },
    complete: () => {
      this.blur = 0;
      this.ease.stop()
    },
  });

  @State() blur: number = 0
  @State() timeout: any;

  componentDidLoad() {
    focusWithin(document)
  }

  @Watch("open")
  observeOpen() {
    this.ease.start()
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

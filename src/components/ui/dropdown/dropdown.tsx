import { Component, Element, Prop, State, Watch, h } from '@stencil/core'
import { blurringEase, focusWithin } from '../../../utils';
import Tunnel from '../../theme';

focusWithin(document)

@Component({
  tag: 'stellar-dropdown',
  styleUrl: 'dropdown.css',
  shadow: true
})
export class Dropdown {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflect: true}) position: "left"|"center"|"right" = "center"
  @Prop() icon: boolean = false;
  @Prop() label: string = "Dropdown";
  @Prop({mutable: true, reflect: true}) open: boolean = false;
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
  @Prop({reflect: true}) dark: boolean = false;

  @State() blur: number = 0
  @State() timeout: any;
  @State() footer: boolean = false;

  componentWillLoad() {
    this.footer = this.element.querySelectorAll('[slot="footer"]').length !== 0;
  }

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
        <div class="clipper">
          <div class="list-wrap">
            <ul class="list">
              <slot></slot>
              {this.footer && <div class="footer">
                <slot name="footer"></slot>
              </div>}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Tunnel.injectProps(Dropdown, ['dark']);

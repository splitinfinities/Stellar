import { Component, Element, Prop, State, h, Host } from '@stencil/core'
import { focusWithin } from '../../../utils';
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
  @Prop() iconName: string = "arrow-down";
  @Prop() label: string = "Dropdown";
  @Prop({mutable: true, reflect: true}) open: boolean = false;
  @Prop({reflect: true}) dark: boolean = false;

  @State() footer: boolean = false;

  componentWillLoad() {
    this.footer = this.element.querySelectorAll('[slot="footer"]').length !== 0;
  }

  componentDidLoad() {
    focusWithin(document)
  }

  onToggle() {
    this.open = !this.open
  }

  render() {
    return <Host aria-label={this.label} class="dropdown" title={this.label}>
        <div class="toggle">
          <slot name="handle"></slot>
          { this.icon && <stellar-asset name={this.iconName} class="caret"></stellar-asset> }
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
      </Host>
  }
}

Tunnel.injectProps(Dropdown, ['dark']);

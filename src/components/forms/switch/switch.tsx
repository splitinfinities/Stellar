import { Component, Prop, Element, Event, EventEmitter, Method, Watch, h } from '@stencil/core';
import Tunnel from '../../dark_mode';

@Component({
  tag: 'stellar-switch',
  styleUrl: 'switch.css'
})
export class Switch {
  @Element() el: HTMLElement;
  @Prop({mutable: true, reflect: true}) checked: boolean = false;
  @Prop() checkedDefault: boolean = false;
  @Event() update: EventEmitter;
  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({reflect: true}) dark: boolean = false;

  componentDidLoad() {
    if (this.checkedDefault) {
      this.checked = this.checkedDefault
    }
  }

  @Method()
  async activate() {
    this.checked = !this.checked
  }

  @Watch('checked')
  handleChecked() {
    this.update.emit({
      checked: this.checked
    })
  }

  render() {
    return (
      <label class="label">
        <input type="checkbox" checked={this.checked} tabindex="-1" onClick={() => {this.activate()}}/>
        <button type="button" onClick={() => {this.activate()}}>
          <span>
            {this.checked && <stellar-asset name="checkmark" />}
            {!this.checked && <stellar-asset name="close" />}
          </span>
        </button>
        <slot />
      </label>
    );
  }
}

Tunnel.injectProps(Switch, ['dark']);

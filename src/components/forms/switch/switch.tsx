import { Component, Prop, Element, Event, EventEmitter, Method, Watch, h, State } from '@stencil/core';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-switch',
  styleUrl: 'switch.css'
})
export class Switch {
  @Element() el: HTMLElement;
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;
  @Prop() checkedDefault: boolean = false;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) novalidate: boolean;
  @Prop({ reflect: true }) required: boolean;
  @State() status: FormResult;
  @Event() update: EventEmitter;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  componentDidLoad() {
    if (this.checkedDefault) {
      this.checked = this.checkedDefault
    }
  }

  @Method()
  async validate(): Promise<FormResult> {
    const status: FormResult = {
      name: this.name,
      value: this.checked,
      valid: true,
      errors: [],
    };

    if (!this.novalidate) {
      // @ts-ignore
      if (!this.checked && this.required) {
        status.valid = false;
        status.errors.push({ message: 'This field is required.' });
      }
    }

    this.status = status;

    return this.status;
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
      <label class="label" htmlFor={this.name} onClick={() => { this.activate() }}>
        <input type="checkbox" name={this.name} id={this.name} checked={this.checked} tabindex="-1" onClick={() => { this.activate() }} />
        <button type="button">
          <span>
            <stellar-asset name={this.checked ? "checkmark" : "close"} />
          </span>
        </button>
        <slot />
      </label>
    );
  }
}

Tunnel.injectProps(Switch, ['dark']);

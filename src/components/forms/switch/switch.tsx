import { Component, Prop, Element, Event, EventEmitter, Method, Watch } from '@stencil/core';

@Component({
  tag: 'stellar-switch',
  styleUrl: 'switch.css'
})
export class Switch {
  @Element() el: HTMLElement;
  @Prop({mutable: true, reflectToAttr: true}) checked: boolean = false;
  @Prop() checkedDefault: boolean = false;
  @Event() change: EventEmitter;

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
    this.change.emit({
      checked: this.checked
    })
  }

  render() {
    return (
      <label class="label">
        <input type="checkbox" checked={this.checked} tabindex="-1" onClick={() => {this.activate()}}/>
        <button onClick={() => {this.activate()}}>
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

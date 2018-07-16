import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'stellar-switch',
  styleUrl: 'switch.css'
})
export class Switch {
  @Element() element: HTMLElement;

  @Prop({mutable: true, reflectToAttr: true}) checked: boolean = false;

  handleChange(e) {
    this.checked = e.target.checked;
  }

  render() {
    return (
      <label class="label">
        <input type="checkbox" checked={this.checked} onChange={(e) => {this.handleChange(e)}} tabindex="-1" />
        <button onClick={() => { this.checked = !this.checked }}><span>{this.checked ? "on" : "off"}</span></button>
        <slot />
      </label>
    );
  }
}

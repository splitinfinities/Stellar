import { Component, Prop, State, Element, Method, Event, EventEmitter } from "@stencil/core";
import Easing from 'easing';

@Component({
  tag: "stellar-toggle-option",
  styleUrl: "toggle-option.css"
})
export class ToggleOption {
  @Element() element: HTMLElement;
  @State() input: HTMLInputElement;

  @Prop({reflectToAttr: true}) type: string = "checkbox";
  @Prop({mutable: true, reflectToAttr: true}) checked: boolean = false;
  @Prop({reflectToAttr: true}) single: boolean;
  @Prop({reflectToAttr: true}) icon: boolean;

  @Prop() for: string = "";
  @Prop() name: string;
  @Prop() default: string = "";
  @Prop() value: string;
  @Prop() required: boolean;
  @Prop() inline: boolean;
  @Prop() size: boolean;

  @Prop() selectedCopy: string = "Selected!";

  @State() _type: string = "checkbox";
  @State() focused: boolean = false;
  @State() blur: number = 5;

  @Event() toggleChanged: EventEmitter;

  hostData() {
    return {
      checked: this.checked
    }
  }

  componentWillLoad () {
    this.updateRealType();
  }

  componentDidLoad () {
    this.input = this.element.querySelector('input.input');
  }

  updateRealType () {
    if (this.type === "radio-block") {
      this._type = "radio";
    } else if (this.type === "checkbox-block") {
      this._type = "checkbox";
    } else {
      this._type = this.type;
    }
  }

  @Method()
  updateSelected (value: boolean) {
    this.checked = value;
  }

  onChange () {
    this.checked = this.input.checked;

    console.log(this.checked)

    const blurEvent = Easing.event(30, 'linear', { duration: 100, endToEnd: true, invert: !this.checked });
    blurEvent.on('data', (data: number) => {
      this.blur = data * 10;
    })

    if (this._type === "radio") {
      this.toggleChanged.emit({ element: this.element, value: this.value });
    }
  }

  onFocus () { this.focused = true }
  onBlur () { this.focused = false }
  onKeyUp (e) { if (e.key === "Enter") { this.input.checked = !this.input.checked; this.onChange() } }

  renderCheckbox () {
    if (this.type === "checkbox") {
      return (
        <div class={this.focused ? "box focused" : "box"}>
          <div>
            <stellar-asset name="checkmark" class={this.checked ? "indicator active" : "indicator"}></stellar-asset>
          </div>
        </div>
      );
    }
  }

  renderRadio () {
    if (this.type === "radio") {
      return (
        <div class={this.focused ? "box focused" : "box"}>
          <div class={this.checked ? "indicator active" : "indicator"} />
        </div>
      );
    }
  }

  renderRadioBlock () {
    if (this.type === "radio-block") {
      return (
        <div class="wrapper">
          <div class={this.focused ? "box focused" : "box"}>
            <div class={this.checked ? "indicator active" : "indicator"} />
          </div>
          <div class="block-content">
            <slot></slot>
          </div>
        </div>
      );
    }
  }

  renderCheckBlock () {
    if (this.type === "checkbox-block") {
      return (
        <div class="wrapper">
          <div class={this.focused ? "box focused" : "box"}>
            <div>
              <stellar-asset name="checkmark" class={this.checked ? "indicator active" : "indicator"} block></stellar-asset>
            </div>
          </div>
          <div class="block-content">
            <slot></slot>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <label>
        <input type="hidden" name={`${this.for}[${this.name}]`} value={this.default} />
        <input class="input" type={this._type} id={`${this.for}_${this.name}_${this.value}`} name={`${this.for}[${this.name}]`} checked={this.checked} value={this.value} required={this.required} onChange={ () => this.onChange()} onFocus={ () => this.onFocus()} onBlur={ () => this.onBlur()} onKeyUp={(e) => { this.onKeyUp(e) }} />

        { this.renderCheckbox() }
        { this.renderRadio() }

        { ["radio", "checkbox"].indexOf(this.type) !== -1 && <p><slot></slot></p> }

        { this.renderRadioBlock() }
        { this.renderCheckBlock() }

        { ["radio", "checkbox"].indexOf(this.type) === -1 &&
          <stellar-blur horizontal={this.blur} class={this.checked ? "status active" : "status"}>
            <stellar-tag size="small" color="theme-base5">{this.selectedCopy}</stellar-tag>
          </stellar-blur>
        }
      </label>
    )
  }
}

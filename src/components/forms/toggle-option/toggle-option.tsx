import { Component, Prop, State, Element, Method, Event, EventEmitter, h } from "@stencil/core";
import { blurringEase } from "../../../utils";

@Component({
  tag: "stellar-toggle-option",
  styleUrl: "toggle-option.css",
})
export class ToggleOption {
  @Element() element: HTMLElement;
  @State() input: HTMLInputElement;

  @Prop({reflect: true}) type: string = "checkbox";
  @Prop({mutable: true, reflect: true}) checked: boolean = false;
  @Prop() checkedDefault: boolean = false;
  @Prop({reflect: true}) single: boolean;
  @Prop({reflect: true}) icon: boolean;
  @Prop({mutable: true}) tooltip: string;
  @Prop({mutable: true, reflect: true}) disabled: boolean;

  @Prop() for: string = "";
  @Prop({mutable: true, reflect: true}) name: string;
  @Prop() default: string = "";
  @Prop() value: string;
  @Prop() required: boolean;
  @Prop() inline: boolean;
  @Prop() size: boolean;

  @Prop() selectedCopy: string = "Selected!";

  @State() _type: string = "checkbox";
  @State() focused: boolean = false;
  @State() blur: number = 0;
  @State() ease: TweenInstance = blurringEase({
    end: 10,
    start: -1,
    duration: 250,
    tick: (args) => {
      this.blur = args.value;
    },
    complete: () => {
      this.blur = 0;
    },
  });

  @Event() changeToggle: EventEmitter;

  componentWillLoad () {
    this.updateRealType();
  }

  componentDidLoad () {
    this.input = this.element.querySelector('input.input');

    if (this.checkedDefault) {
      this.checked = this.checkedDefault;
      this.changeToggle.emit({ element: this.element, value: this.value, checked: this.checked });
    }
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
  async confirm() {
    if (this.input.checked !== this.checked) {
      this.checked = this.input.checked;
    }
  }

  @Method()
  async updateSelected (value: boolean) {
    this.input.checked = value;
    this.onToggleChange()
  }

  onToggleChange () {
    this.checked = this.input.checked;
    this.ease.start();
    this.changeToggle.emit({ element: this.element, value: this.checked ? this.value : undefined, checked: this.checked });
  }

  onFocus () {
    this.focused = true;
  }

  onBlur () {
    this.focused = false;
  }

  onClick () {
    this.input.checked = !this.input.checked;
    this.onToggleChange()
  }

  onKeyDown (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      this.input.checked = !this.input.checked;
      this.onToggleChange()
    }
  }

  renderCheckbox () {
    if (this.type === "checkbox" || this.type === "radio") {
      return (
        <div class={this.focused ? "box focused" : "box"}>
          <div class={this.checked ? "indicator active" : "indicator"}>
            {this.type === "checkbox" && <stellar-asset name="checkmark"></stellar-asset>}
          </div>
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
            <div class={this.checked ? "indicator active" : "indicator"}>
              <stellar-asset name="checkmark" block></stellar-asset>
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
    // @ts-ignore
    return <button type="button" onClick={() => this.onClick()} onKeyDown={e => this.onKeyDown(e)}>
        <input type="hidden" name={`${this.for}[${this.name}]`} value={this.default} />
        <input class="input" type={this._type} id={`${this.for}_${this.name}_${this.value}`} name={`${this.for}[${this.name}]`} checked={this.checked} value={this.value} required={this.required} onChange={(e) => {e.stopPropagation(); e.preventDefault();}} onKeyDown={e => this.onKeyDown(e)} />

        { this.renderCheckbox() }

        { ["radio", "checkbox"].indexOf(this.type) !== -1 && <p><slot></slot></p> }

        { this.renderRadioBlock() }
        { this.renderCheckBlock() }

        { ["radio", "checkbox"].indexOf(this.type) === -1 &&
          <stellar-blur horizontal={this.blur} class={this.checked ? "status active" : "status"}>
            <stellar-tag size="small" color="theme-base5">{this.selectedCopy}</stellar-tag>
          </stellar-blur>
        }

        { this.tooltip && <stellar-tooltip align="bottom-left">{this.tooltip}</stellar-tooltip> }
      </button>
  }
}

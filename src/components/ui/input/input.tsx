import { Component, Element, Prop, State, Listen, Method, Event, EventEmitter } from '@stencil/core';
import { shouldBeAnInput, hasIncrements, hasValue } from "./lib/helpers";
import { Validator } from "./lib/validator";
import zxcvbn from "zxcvbn";
import Tokenfield from "tokenfield";

@Component({
  tag: 'stellar-input',
  styleUrl: 'input.css'
})
export class Input {
  /**
   * Instance of the custom element
   */
  @Element() element: HTMLElement

  /**
   * Instance of the input or text-area element
   */
  @State() input: HTMLInputElement

  /**
   * Public: Changed event
   */
  @Event() valueChanged: EventEmitter;

  /**
   * The kind of element that the Input should be rendered as
   */
  @Prop({reflectToAttr: true}) type: string = "text";

  /**
   * The name of the input element
   */
  @Prop() name: string;

  /**
   * The pre-set value to pass to the input element
   */
  @Prop({mutable: true, reflectToAttr: true}) value: any = "";

  /**
   * The previous value so you can walk back in time
   */
  @State() __previousValue: string;

  // Aesthetic things
  @Prop({mutable: true, reflectToAttr: true}) size: string;
  @Prop() color: string = "theme";

  // Accessibility
  @Prop() label: string;
  @Prop() placeholder: string = "Enter a value";
  @Prop() autocomplete: string;

  // Usability things
  @Prop() disabled: boolean;
  @Prop() readonly: boolean = false;
  @Prop() autofocus: boolean = false;
  @Prop({reflectToAttr: true, mutable: true}) focused: boolean = false;
  @Prop() spellcheck: boolean = true;
  @Prop() maxlength: number = 1000;
  @Prop() cols: number = 30;
  @Prop() rows: number = 5;
  @Prop() wrap: string = "soft";

  // Range sliders
  @Prop() min: number;
  @Prop() max: number;
  @Prop() step: number = 1;

  // Validation
  @Prop() required: boolean = false;
  @Prop() novalidation: boolean = false;
  @Prop() validates: string;
  @Prop() match: string;
  @State() __match: HTMLElement;
  @State() status: { errors?: any; valid?: boolean; level?: number; };
  @State() validator: Validator;
  @State() level: number;
  @State() strength: object;

  @State() tokenField: object;

  @State() generatedId: string;

  componentWillLoad () {
    if (this.match) {
      this.__match = document.querySelector(`stellar-input${this.match}`);

      if (!this.__match) {
        console.error(`Uh oh! Couldn't find element in DOM matching stellar-input${this.match}`);
      }
    }

    if (!this.novalidation) {
      this.validator = new Validator(this);
    }

    if (this.type === "password") {
      this.getStrongLevel()
    }

    this.generatedId = this.generateId()
  }

  componentDidLoad() {
    this.input = this.element.querySelector('.input');

    if (this.type === "tags") {
      this.tokenField = new Tokenfield({
        el: this.input,
        delimiters: [","],
        addItemsOnPaste: true
      });
    }
  }

  handleChange() {
    this.valueChanged.emit(this.value)
  }

  handleFocus() {
    this.focused = true;
  }

  handleBlur() {
    this.focused = false;
    this.validate();
  }

  handleInput() {
    if (this.type === "textarea") {
      this.input.style.height = "1px";
      this.input.style.height = `${this.input.scrollHeight + 2}px`;
    }

    this.value = this.input.value;

    if (this.type === "password") {
      this.getStrongLevel();
    }
  }

  handleIncrement(event: UIEvent) {
    event.preventDefault();
    this.input.stepUp();
    this.value = this.input.value
  }

  handleDecrement(event: UIEvent) {
    event.preventDefault();
    this.input.stepDown();
    this.value = this.input.value
  }

  handleKeyDownIncrement(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.input.stepUp();
      this.value = this.input.value
    }
  }

  handleKeyDownDecrement(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.input.stepDown();
      this.value = this.input.value
    }
  }

  handleReset(event: UIEvent) {
    event.preventDefault();
    this.resetValue()
  }

  handleKeyDownReset (event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.resetValue()
    }
  }

  generateId() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return `input-${getRandomInt(0,1000)}`;
  }

  @Method()
  getId() {
    return this.generatedId
  }

  @Method()
  val() {
    return this.value;
  }

  @Method()
  getStrength() {
    return this.strength;
  }

  @Method()
  setStrength(value: number) {
    this.level = value;
  }

  @Method()
  invalid(message: string|boolean, valid?: boolean, level?: number) {
    if (message) {
      this.status = { errors: [{ message: message }], valid: valid, level: level }
      this.level = level
    } else {
      this.status = undefined
    }
  }

  getStrongLevel () {
    const result = zxcvbn(this.value);

    this.strength = result;
    this.level = result.score;

    if (this.value.length === 0) {
      this.level = -1;
    }
  }

  resetValue () {
    this.__previousValue = this.value;
    this.value = undefined;
    this.input.focus();
  }

  @Listen('keydown')
  handleKeyDown(event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
      if (this.value === "") {
        this.value = this.__previousValue;
      }
    }
  }

  @Method()
  validate () {
    this.status = this.validator.validate(this)

    return this.status;
  }

  validateDarkColor () {
    const hexcolor = this.value;
    var r = parseInt(hexcolor.substr(1,2),16);
    var g = parseInt(hexcolor.substr(3,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    // Return new color if to dark, else return the original
    return (yiq > 150);
  }

  renderLabel() {
    if (this.label) {
      return (<stellar-label for={this.generatedId}>{this.label}</stellar-label>)
    }
  }

  renderColorPicker() {
    if (this.type === "color") {
      return (
        <copy-wrap class="color-picker" align="center" data-invert={this.validateDarkColor()}>
          <stellar-label for={this.generatedId}>{this.value}</stellar-label>
        </copy-wrap>
      )
    }
  }

  renderSearch() {
    if (this.type === "search") {
      return (
        <stellar-asset name="search" class="search" block></stellar-asset>
      )
    }
  }

  renderIncrements() {
    if (hasIncrements(this.type)) {
      return (
        <div class="incrementing">
          <a href="#" onClick={(event: UIEvent) => this.handleIncrement(event)} onKeyDown={(event: KeyboardEvent) => this.handleKeyDownIncrement(event)} onFocus={() => {this.handleFocus()}} onBlur={() => {this.handleBlur()}}>
          <stellar-asset name="arrow-up" block></stellar-asset>
          </a>
          <a href="#" onClick={(event: UIEvent) => this.handleDecrement(event)} onKeyDown={(event: KeyboardEvent) => this.handleKeyDownDecrement(event)} onFocus={() => {this.handleFocus()}} onBlur={() => {this.handleBlur()}}>
          <stellar-asset name="arrow-down" block></stellar-asset>
          </a>
        </div>
      )
    }
  }

  renderPasswordStrength() {
    if (this.type === "password") {
      return this.renderPasswordStrengthSmile()
    }
  }

  renderPasswordStrengthSmile() {
    if (this.level === 5 || this.level === 4) {
      return <stellar-asset class="smile" name="happy" data-level={this.level}></stellar-asset>
    } else if (this.level === 3 || this.level === 2) {
      return <stellar-asset class="smile" name="happy" data-level={this.level}></stellar-asset>
    } else if (this.level === 1 || this.level === 0) {
      return <stellar-asset class="smile" name="sad" data-level={this.level}></stellar-asset>
    } else {
      return <stellar-asset class="smile" name="sad" data-level="-1"></stellar-asset>
    }
  }

  renderSearchClearButton() {
    if (this.type === "search" && hasValue(this.value)) {
      return (
        <stellar-asset src={this.size === "small" ? "CloseSmall" : "Close"} class="close" onClick={(event: UIEvent) => this.handleReset(event)} onKeyDown={(event: KeyboardEvent) => this.handleKeyDownReset(event)} tabindex="0" title="Reset" block></stellar-asset>
      )
    }
  }

  renderInput() {
    if (shouldBeAnInput(this.type)) {
      return (
        <input class="input" id={this.generatedId} type={this.type} value={this.value} name={this.name} placeholder={this.placeholder} required={this.required} maxlength={this.maxlength} autofocus={this.autofocus} readonly={this.readonly} disabled={this.disabled} min={this.min} max={this.max} step={this.step} autocomplete={this.autocomplete || this.type} onInput={() => this.handleInput()} onChange={ () => this.handleChange()} onFocus={ () => this.handleFocus()} onBlur={() => this.handleBlur()} />
      )
    }
  }

  renderTextArea() {
    if (this.type === "textarea") {
      return (
        <textarea class="input" id={this.generatedId} placeholder={this.placeholder} name={this.name} cols={this.cols} maxlength={this.maxlength} rows={this.rows} disabled={this.disabled} readonly={this.readonly} autofocus={this.autofocus} spellcheck={this.spellcheck} required={this.required} onInput={() => this.handleInput()} onChange={ () => this.handleChange()} onFocus={ () => this.handleFocus()} onBlur={() => this.handleBlur()}>{this.value}</textarea>
      )
    }
  }

  renderErrors() {
    if (this.status && this.status.errors && this.status.errors.length !== 0) {
      return (
        <p class="validation">
          <span>{this.status.errors[this.status.errors.length - 1].message}</span>
        </p>
      )
    }
  }

  render() {
    return (
      <div class="wrapper">
        <label>
          { this.renderLabel() }

          <div class="content">
            { this.renderColorPicker() }
            { this.renderSearch() }
            { this.renderInput() }
            { this.renderTextArea() }
            { this.renderIncrements() }
            { this.renderSearchClearButton() }
            { this.renderPasswordStrength() }
          </div>
        </label>

        { this.renderErrors() }
      </div>
    );
  }
}

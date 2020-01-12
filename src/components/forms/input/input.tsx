import { Component, Element, Prop, State, Listen, Method, Event, EventEmitter, Watch, h } from '@stencil/core';
import { shouldBeAnInput, hasIncrements, hasValue, isDatePicker, Validator, Tokenfield } from "./lib";
import { zxcvbn, TinyDatePicker, moment } from '../../../utils'
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-input',
  styleUrl: 'input.css',
  shadow: true
})
export class Input {
  /**
   * Instance of the custom element
   */
  @Element() element: HTMLElement

  /**
   * Instance of the input or text-area element
   */
  input!: HTMLInputElement|HTMLTextAreaElement

  /**
   * Public: Updated event
   */
  @Event() update: EventEmitter;

  /**
   * Public: Focus event
   */
  @Event() focusing: EventEmitter;

  /**
   * Public: Blur event
   */
  @Event() bluring: EventEmitter;

  /**
   * The kind of element that the Input should be rendered as
   */
  @Prop({reflect: true}) type: string = "text";

  /**
   * The name of the input element
   */
  @Prop({reflect: true}) name: string;

  /**
   * The pre-set value to pass to the input element
   */
  @Prop({mutable: true}) value: any;

  /**
   * The pre-set value to pass to the input element
   */
  @Prop({mutable: true, reflect: true}) default: any;

  /**
   * The pre-set value to pass to the input element
   */
  @Prop({mutable: true, reflect: true}) requirements: boolean = false;

  /**
   * The previous value so you can walk back in time
   */
  @State() __previousValue: string;

  // Aesthetic things
  @Prop({mutable: true, reflect: true}) size: string;
  @Prop() color: string = "theme";

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({reflect: true}) dark: boolean = false;

  // Accessibility
  @Prop({ mutable: true, reflect: true }) label: string;
  @Prop() description: string;
  @Prop() tooltip: string;
  @Prop({ mutable: true, reflect: true }) placeholder: string = "Enter a value";

  // Usability things
  @Prop() disabled: boolean;
  @Prop() readonly: boolean = false;
  @Prop() autofocus: boolean = false;
  @Prop({reflect: true, mutable: true}) focused: boolean = false;
  @Prop() spellcheck: boolean = true;
  @Prop() maxlength: number = 1000;
  @Prop() cols: number = 30;
  @Prop() rows: number = 2;
  @Prop() wrap: string = "soft";
  @Prop() autocomplete: "name"|"honorific-prefix"|"given-name"|"additional-name"|"family-name"|"honorific-suffix"|"nickname"|"username"|"current-password"|"new-password"|"one-time-code"|"organization-title"|"organization"|"street-address"|"address-line1"|"address-line2"|"address-line3"|"address-level4"|"address-level3"|"address-level2"|"address-level1"|"country"|"country-name"|"postal-code"|"cc-name"|"cc-given-name"|"cc-additional-name"|"cc-family-name"|"cc-number"|"cc-exp"|"cc-exp-month"|"cc-exp-year"|"cc-csc"|"cc-type"|"transaction-currency"|"transaction-amount"|"language"|"bday"|"bday-day"|"bday-month"|"bday-year"|"sex"|"url"|"photo";

  // Dates
  @State() datepicker: TinyDatePicker;
  @Prop() dateType: "month"|"year"|"day" = "month";

  // Range sliders
  @Prop() min: number;
  @Prop() max: number;
  @Prop() step: number = 1;

  // Files
  @Prop() multipleFileCaption: string = '{count} files'
  @Prop() replace_placeholder: string = "Replace file"
  @Prop({mutable: true}) files: Array<any> = []
  @State() _multipleFileUploadsLabel: string
  @State() _fileLabel: string
  @Prop() multiple: boolean = false
  @Prop() droppable: boolean = false
  @Prop() accept: string


  // Validation
  @Prop() required: boolean = false;
  @Prop() novalidate: boolean = false;
  @Prop() validates: string;
  @Prop() match: string;
  @State() __match: HTMLElement;
  @State() status: FormResult;
  @State() validator: Validator;
  @State() level: number;
  @State() strength: object;

  @State() lightDom: HTMLInputElement;

  @Prop({mutable: true}) tokenField: any;

  @Prop({ mutable: true, reflect: true }) icon: boolean = false;

  @Prop({ mutable: true, reflect: true }) capsLock: boolean = false;
  @Prop({ mutable: true, reflect: true }) showCapsLock: boolean = false;

  componentWillLoad () {
    if (this.default) {
      this.value = this.default;
    }

    if (this.type === "password") {
      this.showCapsLock = true;
    }

    if (this.match) {
      this.__match = document.querySelector(`stellar-input${this.match}`);

      if (!this.__match) {
        console.error(`Uh oh! Couldn't find element in DOM matching stellar-input${this.match}`);
      }
    }

    this.checkForIcon()

    if (this.type === "file") {
      this._prepareFileLabels();
    }

    this.validator = new Validator(this);

    if (this.type === "password" && this.value) {
      this.getStrongLevel()
    }

    if (this.type === "email" || this.type === "password") {
      this.addLightDomInput();
    }
  }

  componentDidLoad() {
    if (this.type === "tags") {
      this.tokenField = new Tokenfield({
        el: this.input,
        delimiters: [","],
        addItemsOnPaste: true
      });

      this.tokenField.setItems(this.value)
    }

    if (this.is_date_type) {
      this.datepicker = TinyDatePicker(this.input, {
        type: this.dateType,
        mode: 'dp-below',
        format: (date) => { return moment(date).format(this.dateFormat); },
        parse: (date) => { return date ? moment(date).toDate() : moment().toDate() ; }
      });

      this.datepicker.on('select', (_, dp) => {
        this.value = moment(dp.state.selectedDate).format(this.dateFormat);
      });
    }
  }

  addLightDomInput() {
    if (!this.lightDom) {
      this.lightDom = document.createElement('input');
      this.lightDom.setAttribute("type", this.type);
      this.lightDom.tabIndex = -1;
      this.lightDom.classList.add("clip")
      this.lightDom.onchange = (e) => {
        // @ts-ignore
        this.value = e.target.value;
      };

      this.element.parentNode.insertBefore(this.lightDom, this.element);
    }
  }

  get dateFormat() {
    if (this.dateType === "day") {
      return 'YYYY-MM-DD'
    } else if (this.dateType === "month") {
      return 'YYYY-MM'
    } else if (this.dateType === "year") {
      return 'YYYY'
    }
  }

  get visualDateFormat() {
    if (this.dateType === "day") {
      return 'MMMM D, YYYY'
    } else if (this.dateType === "month") {
      return 'MMMM, YYYY'
    } else if (this.dateType === "year") {
      return 'YYYY'
    }
  }

  @Method()
  async getDatePicker() {
    return this.datepicker
  }

  get is_date_type() {
    return ["month", "date"].includes(this.type);
  }

  @Watch('value')
  handleValueChange() {
    this.update.emit(this.value)
    if (this.lightDom) {
      this.lightDom.value = this.value;
    }
  }

  handleChange() {
    if (this.type === "file") {
      this.updateFilesArray();
      this.updateFileLabel();
    }

    this.update.emit(this.value)
  }

  handleFocus() {
    this.focused = true;
    this.focusing.emit({})
  }

  handleBlur() {
    this.focused = false;
    this.validate();
    this.bluring.emit({})
  }

  handleInput() {
    if (this.type === "textarea") {
      this.input.style.height = "1px";
      this.input.style.height = `${this.input.scrollHeight}px`;
    }

    if (this.type !== "file") {
      if (this.type === "tags") {
        this.value = this.tokenField.getItems()
      } else {
        this.value = this.input.value;
      }
    }

    if (this.type === "password") {
      this.getStrongLevel();
    }
  }

  handleIncrement(event: UIEvent) {
    event.preventDefault();
    if (this.is_date_type) {
      // @ts-ignore
      this.value = moment(this.value).add(1, `${this.dateType}s`).format(this.dateFormat);
      this.datepicker.close();
    } else {
      // @ts-ignore
      this.input.stepUp();
      this.value = this.input.value
    }
  }

  handleDecrement(event: UIEvent) {
    event.preventDefault();
    if (this.is_date_type) {
      // @ts-ignore
      this.value = moment(this.value).subtract(1, `${this.dateType}s`).format(this.dateFormat);
      this.datepicker.close();
    } else {
      // @ts-ignore
      this.input.stepDown();
      this.value = this.input.value
    }
  }

  handleKeyDownIncrement(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.keyCode === 38) {
      event.preventDefault();
      if (this.is_date_type) {
        // @ts-ignore
        this.value = moment(this.value).add(1, `${this.dateType}s`).format(this.dateFormat);
        this.datepicker.close();
      } else {
        // @ts-ignore
        this.input.stepUp();
        this.value = this.input.value
      }
    }
  }

  handleKeyDownDecrement(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.keyCode === 40) {
      event.preventDefault();
      if (this.is_date_type) {
        // @ts-ignore
        this.value = moment(this.value).subtract(1, `${this.dateType}s`).format(this.dateFormat);
        this.datepicker.close();
      } else {
        // @ts-ignore
        this.input.stepDown();
        this.value = this.input.value
      }
    }
  }

  handleReset(event: UIEvent) {
    event.preventDefault();
    this.resetValue()
  }

  handleKeyDownEnter (event: KeyboardEvent) {
    if (event.keyCode === 13) {
      const form = this.element.closest('stellar-form');
      form.submit_form();
    }
  }

  handleInputKeyDown (event) {
    this.handleKeyDownEnter(event);
  }

  handleKeyDownReset (event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.resetValue()
    }
  }

  checkForIcon() {
    var element = this.element.querySelector('*[slot="icon"]');

    if (element) {
      this.icon = true;
    }
  }

  _prepareFileLabels () {
    if (this.type === "file" && this.multiple) {
      this.replace_placeholder = (this.replace_placeholder === "Replace file") ? "Replace files" : this.replace_placeholder;
    }

    this.placeholder = (!this.value) ? this.placeholder : this.replace_placeholder;
  }

  updateFileLabel() {
    var fileName = '';

    if (this.files && this.files.length > 1) {
      fileName = this.multipleFileCaption.replace('{count}', this.files.length.toString());
    } else {
      fileName = this.input.value.split( '\\' ).pop();
    }

    if (fileName) {
      this._fileLabel = fileName;
    } else {
      this._fileLabel = undefined;
    }

    this.value = this.input.value;

    this._prepareFileLabels()

    this.validate();
  }

  updateFilesArray() {
    var files: any = [];

    if (this.type === "file" && this.multiple) {
      // @ts-ignore
      Array.from(this.input.files).forEach((file: File) => {
        var item = {
          'name': file.name,
          'size': file.size
        };

        files.push(item);
      });
    } else {
      // @ts-ignore
      files = this.input.files[0]
    }

    this.files = files;
  }

  @Method()
  async val() {
    return this.value;
  }

  @Method()
  async getStrength() {
    return this.strength;
  }

  @Method()
  async setStrength(value: number) {
    this.level = value;
  }

  @Method()
  async invalid(message: string|boolean, valid?: boolean, level?: number) {
    if (message) {
      this.status = { errors: [{ message: `${message}` }], valid: valid, level: level, value: this.value, name: this.name }
      this.level = level
    } else {
      this.status = undefined
    }
  }

  @Method()
  async validate(): Promise<FormResult> {
    if (this.novalidate) {
      return await this.validator.validate(this);
    } else {
      this.status = await this.validator.validate(this);
      return this.status;
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

    this.capsLock = event.getModifierState('CapsLock');
  }

  @Listen('mousedown')
  @Listen('mouseup')
  @Listen('keyup')
  @Listen('focus')
  handleMouseDown (event) {
    this.capsLock = event.getModifierState('CapsLock');
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
      return (<stellar-label for={"input"} size={this.size}>{this.label}</stellar-label>)
    }
  }

  renderColorPicker() {
    if (this.type === "color") {
      return (
        <copy-wrap class="color-picker" align="center" data-invert={this.validateDarkColor()}>
          <stellar-label for={"input"} size={this.size}>{this.value}</stellar-label>
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
    if (this.level === 5 || this.level === 4 || this.level === 3) {
      return <stellar-asset class="smile" name="happy" data-level={this.level}></stellar-asset>
    } else if (this.level === 2 || this.level === 1 || this.level === 0) {
      return <stellar-asset class="smile" name="sad" data-level={this.level}></stellar-asset>
    } else {
      return <stellar-asset class="smile" name="sad" data-level="-1"></stellar-asset>
    }
  }

  renderSearchClearButton() {
    if (this.type === "search" && hasValue(this.value)) {
      return (
        <stellar-asset name="close" class="close" onClick={(event: UIEvent) => this.handleReset(event)} onKeyDown={(event: KeyboardEvent) => this.handleKeyDownReset(event)} tabindex="0" title="Reset" block></stellar-asset>
      )
    }
  }

  renderDatePicker() {
    if (isDatePicker(this.type)) {
      return (<div class="relative">
          <div class="fake-input absolute">
            {moment(this.value).format(this.visualDateFormat)}
          </div>

          <input class="input" ref={(el) => this.input = el as HTMLInputElement} id={"input"} type="text" name={this.name} placeholder={this.placeholder} required={this.required} maxlength={this.maxlength} autofocus={this.autofocus} readonly={this.readonly} disabled={this.disabled} min={this.min} max={this.max} step={this.step} autocomplete={this.autocomplete || this.type} value={this.value} onInput={() => this.handleInput()} onChange={ () => this.handleChange()} onFocus={ () => this.handleFocus()} onBlur={() => this.handleBlur()} onKeyDown={(event: KeyboardEvent) => {this.handleKeyDownIncrement(event); this.handleKeyDownDecrement(event); }} />
        </div>
      )
    }
  }

  renderInput() {
    if (shouldBeAnInput(this.type)) {
      return (
        <input class="input" ref={(el) => this.input = el as HTMLInputElement} id={"input"} type={this.type} name={this.name} placeholder={this.placeholder} required={this.required} maxlength={this.maxlength} autofocus={this.autofocus} readonly={this.readonly} disabled={this.disabled} min={this.min} max={this.max} step={this.step} autocomplete={this.autocomplete || this.type} value={this.value} onInput={() => this.handleInput()} onChange={ () => this.handleChange()} onFocus={ () => this.handleFocus()} onBlur={() => this.handleBlur()} onKeyDown={(event) => { this.handleInputKeyDown(event) }} />
      )
    }
  }

  renderTextArea() {
    if (this.type === "textarea") {
      return (
        <textarea class="input" ref={(el) => this.input = el as HTMLTextAreaElement} id={"input"} placeholder={this.placeholder} name={this.name} cols={this.cols} maxlength={this.maxlength} rows={this.rows} disabled={this.disabled} readonly={this.readonly} autofocus={this.autofocus} spellcheck={this.spellcheck} required={this.required} onInput={() => this.handleInput()} onChange={ () => this.handleChange()} onFocus={ () => this.handleFocus()} onBlur={() => this.handleBlur()}>{this.value}</textarea>
      )
    }
  }

  renderFileUpload() {
    if (this.type === "file") {
      return (
        <div class="file-wrapper">
          <div class="upload-card">
            <section>
              <input class="input" ref={(el) => this.input = el as HTMLInputElement} id={"input"} type={this.type} name={this.name} placeholder={this.placeholder} required={this.required} maxlength={this.maxlength} autofocus={this.autofocus} readonly={this.readonly} disabled={this.disabled} onClick={(e) => { e.stopPropagation(); }} onInput={() => this.handleInput()} onChange={() => this.handleChange()} multiple={this.multiple} accept={this.accept} onFocus={() => this.handleFocus()} onBlur={() => this.handleBlur()} />

              {this._fileLabel && <h3>{this._fileLabel}</h3>}

              <h4>
                <stellar-asset name={this._fileLabel ? "create" : "add-circle"} class="" />
                {this.placeholder}
              </h4>

              { this.renderMultipleFileUploads() }
            </section>
          </div>
        </div>
      )
    }
  }

  renderMultipleFileUploads() {
    if (this.multiple && this.files && this.files.length > 1) {
      return (
        <ul class="file-list">
          { this.files.map((file) =>
            <li>
              <p>{ file.name } | <stellar-unit value={ file.size } /></p>
            </li>
          ) }
        </ul>
      );
    }
  }

  renderErrors() {
    if (this.status && this.status.errors && this.status.errors.length !== 0) {
      return (
        <stellar-label size={this.size} class="validation">
          <span>{ this.status.errors[this.status.errors.length - 1].message }</span>
        </stellar-label>
      )
    }
  }

  render() {
    return (
      <div class="wrapper">
        <label>
          { this.renderLabel() }

          <div class="content">
            <div class="icon">
              <slot name="icon" />
            </div>

              { this.renderDatePicker() }
              { this.renderColorPicker() }
              { this.renderSearch() }
              { this.renderInput() }
              { this.renderTextArea() }
              { this.renderFileUpload() }
              { this.renderIncrements() }
              { this.renderSearchClearButton() }
              { this.renderPasswordStrength() }

              { this.showCapsLock && this.capsLock && <div class="caps-lock"><stellar-label size={this.size}>Caps Lock</stellar-label><stellar-asset name="arrow-dropup-circle"/></div> }
              { this.tooltip && <stellar-tooltip align="bottom-left">{this.tooltip}</stellar-tooltip> }
          </div>

          { this.description && <stellar-label size="small" underneath>{this.description}</stellar-label> }
        </label>

        { this.renderErrors() }
      </div>
    );
  }
}

Tunnel.injectProps(Input, ['dark']);

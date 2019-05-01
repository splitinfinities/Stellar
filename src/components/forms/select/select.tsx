import { Component, Prop, State, Listen, Watch, Element, Event, EventEmitter, Method } from '@stencil/core';
import delay from 'await-delay';

@Component({
  tag: 'stellar-select',
  styleUrl: 'select.css',
  shadow: true
})
export class Select {
  @Element() element: HTMLElement;

  @Prop({ mutable: true, reflectToAttr: true }) name: string|boolean = "select";
  @Prop({ mutable: true }) label: string;
  @Prop({ mutable: true }) placeholder: string = "Choose something...";
  @Prop({ mutable: true }) description: string;
  @Prop({ mutable: true }) tooltip: string;
  @Prop({ mutable: true, reflectToAttr: true }) inline: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) multiple: boolean;
  @Prop() other: boolean;
  @Prop() placeholderInverted: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) size: string;
  @Prop() required: boolean = false;
  @Prop() processing: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) focused: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) open: boolean = false;
  @Prop() footer: boolean;
  @Prop() novalidate: boolean;
  @Prop() verbiage: string = "selection";
  @Prop() verbiageAn: boolean;
  @Prop({reflectToAttr: true}) overlay: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) value: Array<string>|string;
  @Prop() valueLabel: string = undefined;
  @Prop() default: any;

  @State() current: any;
  @State() status: FormResult;
  @State() blur: number = 0;
  @State() observer: MutationObserver;

  @State() clear_confirm: boolean = false;

  @State() values: Array<string> = [];

  @Event() change: EventEmitter;

  componentWillLoad () {
    if (this.multiple) {
      this.value = []
    }

    this.listen_to_values();
  }

  async componentDidLoad () {
    this.current = this.element.shadowRoot.querySelector('stellar-item.current')

    if (this.multiple) {
      const options = await this.option_elements();

      // @ts-ignore
      options.forEach((element) => {
        element.multiple = true;
      })
    }

    if (this.default) {
      if (typeof this.default === "object" && this.default.constructor.name === "Array") {
        this.default.forEach((value) => {
          // @ts-ignore
          this.element.querySelector(`stellar-item[value="${value}"]`).select_item()
        })
      } else {
        // @ts-ignore
        this.element.querySelector(`stellar-item[value="${this.default}"]`).select_item()
      }
    }

  }

  async clearValue() {
    if (this.clear_confirm) {
      await delay(100);

      this.clear_confirm = false;
      this.value = [];
      this.values = [];

      const options = await this.option_elements();

      Array.from(options).forEach((element) => {
        element.selected = false;
      });

      this.change.emit(this.value);
    } else {
      this.clear_confirm = true;
    }
  }

  @Watch('open')
  handleOpenChange() {
    // @ts-ignore
    this.element.shadowRoot.querySelector('button.select-title').focus();
  }

  @Watch('multiple')
  async handleMultipleChange(value) {
    const options = await this.option_elements();

    // @ts-ignore
    options.forEach((element) => {
      element.multiple = value;
    })
  }

  @Listen('mounted')
  async mountedHandler(event: CustomEvent) {
    const data = event.detail;

    if (this.multiple) {
      const option_elements = await this.option_elements()

      let values = []

      // @ts-ignore
      option_elements.forEach((option) => {
        option.selectable = true;

        if (this.value && this.value.includes(option.value) && !data.element.selected) {
          option.selected = true;
        }

        if (option.selected) {
          values.push(option.value)
        }
      });

      this.value = values;
    } else {
      this.value = data.element.selected ? data.element.value : this.value;

      if (this.value) {
        const options: NodeListOf<HTMLStellarItemElement> = await this.option_elements();

        // @ts-ignore
        options.forEach((element: HTMLStellarItemElement) => {
          element.selectable = true;

          if (this.value === element.value) {
            element.selected = true;
          }
        })
      }
    }
  }

  @Listen('selectionChanged')
  async selectionChangedHandler(event: CustomEvent) {
    const data = event.detail;

    if (this.multiple) {
      data.selected = !data.selected;
      const option_elements = await this.option_elements()

      let values = []

      // @ts-ignore
      option_elements.forEach((option) => {
        if (this.value && this.value.includes(option.value) && data.value !== option.value) {
          option.selected = true;
        }

        if (option.selected) {
          values.push(option.value)
        }
      });

      this.value = values;
      this.change.emit(this.value);
    } else {
      if (!data.element.classList.contains("current")) {
        const options = await this.option_elements();

        // @ts-ignore
        options.forEach((element) => {
          element.selected = false;
        })

        data.selected = true;
        this.value = data.value;

        this.change.emit(this.value);

        if (this.current) {
          this.current.apply(await data.data());
        }

        setTimeout(() => {
          this.open = false;
        }, 200);
      }
    }
  }

  @Listen('focusChanged')
  selectedFocusChangedHandler() {
    this.focused = true;
  }

  @Listen('blurChanged')
  selectedBlurChangedHandler() {
    this.focused = false;
  }

  handleTitleFocus() {
    this.focused = true;

  }

  handleTitleBlur() {
    this.focused = false;
  }

  @Listen('window:click')
  handleNotClick(e) {
    if (e.target !== this.element && !this.element.contains(e.target)) {
      if (this.open) {
        this.open = false;
      }
    }
  }

  @Listen('keydown.escape')
  handleEscapeKey() {
    if (this.open) {
      this.open = false;
    }
  }

  @Listen('keydown')
  handleArrowKeys(ev: KeyboardEvent) {
    if (ev.keyCode === 40 || ev.keyCode === 38) {
      if (this.open) {
        ev.preventDefault();
        ev.stopPropagation();

        if (ev.keyCode === 40) {
          this.focusNextOption();
        } else {
          this.focusPreviousOption();
        }
      }
    }
  }

  readable_value(): string {
    // @ts-ignore
    if (typeof this.value === "object") {
      if (this.value.length === 0) {
        if (this.placeholderInverted) {
          return `All ${this.verbiage}(s) selected`
        } else {
          return `No ${this.verbiage}(s) selected`
        }
      }
      return `${this.value.length} ${this.verbiage}${this.value.length > 1 ? "s" : ""}`
    } else if (typeof this.value === "string") {
      return this.valueLabel || this.value.toString() || `Select ${this.verbiageAn ? "an" : "a"} ${this.verbiage}`
    } else {
      return this.valueLabel || this.value
    }
  }

  @Method()
  async validate(): Promise<FormResult> {
    const status: FormResult = {
      name: `${this.name}`,
      value: this.value,
      valid: true,
      errors: [],
    };

    if (!this.novalidate) {
      // @ts-ignore
      if (!this.value) {
        status.valid = false;
        status.errors.push({ message: 'This field is required.' });
      }

      const options = await this.options()

      // @ts-ignore
      if (!options.includes(this.value)) {
        status.valid = false;
        status.errors.push({ message: `"${this.value}" isn't a valid option.` });
      }
    }

    this.status = status;

    return this.status;
  }

  listen_to_values() {
    var targetNode = this.element;
    var config = { childList: true, subtree: true };

    var callback = (mutationsList) => {
      for (var mutation of mutationsList) {
        if (mutation.type == 'childList') {
          this.update_values();
        }
      }
    };

    this.observer = new MutationObserver(callback);
    this.observer.observe(targetNode, config);
  }

  async update_values() {
    const values = Array.from(this.element.querySelectorAll('stellar-item'))

    this.values = values.map((element: HTMLStellarItemElement) => {
      if (this.multiple) {
        element.multiple = true
      }

      if (element.valueLabel && element.selected) {
        this.valueLabel = element.valueLabel;
      }

      return element.value;
    })
  }

  @Method()
  async option_elements(): Promise<NodeListOf<HTMLStellarItemElement>> {
    return this.element.querySelectorAll('stellar-item:not(.current)');
  }

  @Method()
  async options(): Promise<Array<string>> {
    const elements = await this.option_elements()
    const options = []

    // @ts-ignore
    elements.forEach((option: HTMLStellarItemElement) => {
      options.push(option.value);
    })

    return options
  }

  async focusPaths() {
    let current = undefined;
    let next = undefined;
    let previous = undefined;
    const elements = await this.options();

    // @ts-ignore
    elements.forEach((element, index) => {
      // @ts-ignore
      if (element.hasFocus()) {
        previous = elements[index - 1];
        current = element;
        next = elements[index + 1];
      }
    })

    if (!current) {
      var first = elements[0];
      this.focusElement(first);
      current = first;
    }

    return { previous, current, next };
  }

  focusFirstItem() {
    //@ts-ignore
    this.element.querySelector('.select-list stellar-item:first-of-type').focus()
  }

  focusElement(element) {
    element.focus();
  }

  async focusNextOption() {
    const elements = await this.focusPaths();

    if (elements.next) {
      this.focusElement(elements.next);
    }
  }

  async focusPreviousOption() {
    const elements = await this.focusPaths();

    if (elements.previous) {
      this.focusElement(elements.previous);
    }
  }

  closeOthers() {
    const selects = document.querySelectorAll('stellar-select[open]');
    Array.from(selects).forEach((s: HTMLStellarSelectElement) => {
      if (s !== this.element) {
        s.open = false;
      }
    })
  }

  handleTitleClick() {
    this.closeOthers();
    this.open = !this.open;
  }

  renderLabel() {
    if (this.label) {
      return <div class="label-wrapper">
        <stellar-label onClick={() => { this.focusFirstItem() }}>{this.label}</stellar-label>
        { this.renderEmptyButton() }
      </div>
    }
  }

  renderErrors() {
    if (this.status && this.status.errors && this.status.errors.length !== 0) {
      return (
        <p class="validation">
          {this.status.errors.map(error =>
            <span>{error.message}</span>
          )}
        </p>
      )
    }
  }

  renderEmptyButton() {
    return this.multiple && this.value && this.value.length > 0 && <stellar-button tag="button" size="tiny" ghost class="theme-red" onClick={(e) => { e.stopPropagation(); this.clearValue() }}>
      <stellar-asset name="close" class="fs4 mr1"></stellar-asset>
      { this.clear_confirm ? `Clear ${this.value.length} selections?` : `Clear` }
    </stellar-button>
  }

  render() {
    return (
      <div class="wrapper">
        { this.renderLabel() }

        <div class="select">
          <button type="button" class="select-title" onClick={() => this.handleTitleClick()} onFocus={() => this.handleTitleFocus()} onBlur={() => this.handleTitleBlur()}>
            <stellar-item class="current" type="button" value={this.value ? this.value.toString() : ""} tabindex="-1" selectable={false} label={this.readable_value()}>
              {this.readable_value()}
            </stellar-item>
            <stellar-asset name="arrow-down" />

            { this.name && <input type="text" tabindex="-1" value={this.value} name={this.name.toString()} required={this.required} /> }
          </button>

          { this.tooltip && <stellar-tooltip align="bottom-left" onClick={() => this.handleTitleClick()}>{this.tooltip}</stellar-tooltip> }

          <stellar-blur vertical={this.blur} class="select-list">
            <div class="select-list-header">
              <slot name="header"></slot>
            </div>

            <div class="select-list-body">
              <slot></slot>
            </div>

            { this.footer && <div class="select-list-footer"><slot name="footer"></slot></div> }
          </stellar-blur>
        </div>

        <stellar-label size="small" underneath>{this.description}</stellar-label>

        { !this.novalidate && this.renderErrors() }
      </div>
    );
  }
}

import { Component, Prop, State, Listen, Watch, Element, Event, EventEmitter, Method, h } from '@stencil/core';
import delay from 'await-delay';
import Pluralize from 'pluralize';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-select',
  styleUrl: 'select.css',
  shadow: true
})
export class Select {
  @Element() element: HTMLElement;

  @Prop({ mutable: true, reflect: true }) name: string | boolean = "select";
  @Prop({ mutable: true }) label: string;
  @Prop({ mutable: true }) placeholder: string = "Choose something...";
  @Prop({ mutable: true }) description: string;
  @Prop({ mutable: true }) tooltip: string;
  @Prop({ mutable: true, reflect: true }) inline: boolean;
  @Prop({ mutable: true, reflect: true }) multiple: boolean;
  @Prop() other: boolean;
  @Prop() placeholderInverted: boolean;
  @Prop({ mutable: true, reflect: true }) size: "tiny" | "small" | "medium" | "large";
  @Prop() required: boolean = false;
  @Prop() processing: boolean;
  @Prop({ mutable: true, reflect: true }) focused: boolean;
  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop() footer: boolean;
  @Prop() novalidate: boolean;
  @Prop() verbiage: string = "selection";
  @Prop() verbiageAn: boolean;
  @Prop({ reflect: true }) overlay: boolean;
  @Prop({ mutable: true, reflect: true }) value: Array<string> | string;
  @Prop() valueLabel: string = undefined;
  @Prop() default: any;
  @Prop({ reflect: true }) loading: boolean = false;
  @Prop({ reflect: true }) fit: boolean = false;
  @Prop({ reflect: true }) wrap: boolean = false;
  @Prop({ reflect: true }) resize: boolean | "full" = false;
  @Prop({ reflect: true }) autoSelectFirst: boolean = false;

  /**
   * Sets the button or link as an outlined button.
   */
  @Prop({ reflect: true }) dark: boolean = false;

  titleItem!: HTMLStellarItemElement;
  @State() status: FormResult;
  @State() blur: number = 0;
  observer!: MutationObserver;
  @State() language: string;

  @State() clear_confirm: boolean = false;

  @Event() update: EventEmitter;

  async componentWillLoad() {
    if (this.multiple) {
      this.value = []
    }

    const options = await this.option_elements();

    // @ts-ignore
    options.forEach((element) => {
      element.selectable = true;
      element.fit = this.fit;
      element.wrap = this.wrap;

      if (this.multiple) {
        element.multiple = true;
      }
    })
  }

  async componentDidLoad() {
    this.listen_to_values();
    this.titleItem = this.element.shadowRoot.querySelector('stellar-item[select-title]')

    if (this.default) {
      if (typeof this.default === "object" && this.default.constructor.name === "Array") {
        this.default.forEach((value) => {
          // @ts-ignore
          this.element.querySelector(`stellar-item[value="${value}"]`).select_item({ selected: true })
        })
      } else {
        // @ts-ignore
        this.element.querySelector(`stellar-item[value="${this.default}"]`).select_item({ selected: true })
      }
    }

  }

  async clearValue() {
    if (this.clear_confirm) {
      await delay(100);

      this.clear_confirm = false;
      this.value = [];

      const options = await this.option_elements();

      Array.from(options).forEach((element) => {
        element.selected = false;
      });

      this.update.emit(this.value);
    } else {
      this.clear_confirm = true;
    }
  }

  @Method()
  async update_values() {
    if (this.multiple) {
      const option_elements = await this.option_elements()

      let values = [];

      // @ts-ignore
      option_elements.forEach((option) => {
        if (!option.multiple) {
          option.multiple = true
        }

        if (option.selected) {
          values.push(option.value)
        }
      });

      this.value = values;
      this.update.emit(this.value);
      this.updateLanguage();
    } else {
      const options = await this.option_elements();

      if (this.value.length === 0 && this.autoSelectFirst) {
        this.element.querySelector('stellar-item').select_item({ selected: true })
      }

      Array.from(options).forEach(async (el) => {
        if (el.selected) {
          this.titleItem.apply(await el.data());
          this.value = el.value;
          this.update.emit(this.value);
          this.updateLanguage()
        }

        if (el.selectTitle) {
          this.value = el.value;
        }
      })
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
      this.update.emit(this.value);
    } else {
      if (!data.element.selectTitle) {
        const options = await this.option_elements();

        // @ts-ignore
        options.forEach((element) => {
          element.selected = false;
        })

        data.selected = true;
        this.value = data.value;

        this.update.emit(this.value);

        this.titleItem.apply(await data.data());

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

  @Listen('click', { target: 'window' })
  handleNotClick(e) {
    if (e.target !== this.element && !this.element.contains(e.target)) {
      if (this.open) {
        this.open = false;
      }
    }
  }

  @Listen('keydown')
  handleEscapeKey(event) {
    if (event.key === "space" && this.open) {
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

  updateLanguage() {
    let language;
    let details;

    if (typeof this.value === "object") {
      if (this.value.length === 0) {
        details = Pluralize(this.verbiage, this.value.length)

        if (this.placeholderInverted) {
          language = `All ${details} selected`
        } else {
          language = `No ${details} selected`
        }
      } else {
        details = Pluralize(this.verbiage, this.value.length, true);
        language = `${details} selected`;
      }

    } else if (typeof this.value === "string") {
      language = this.valueLabel || this.value.toString() || `Select ${this.verbiageAn ? "an" : "a"} ${this.verbiage}`
    } else {
      language = this.valueLabel || this.value
    }

    this.language = language
  }

  @Method()
  async validate(): Promise<FormResult> {
    const status: FormResult = {
      name: `${this.name}`,
      value: this.value,
      valid: true,
      errors: [],
    };

    this.updateLanguage();

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
    var config = {
      attributes: true,
      childList: true,
      characterData: true,
      type: true
    };

    var callback = () => {
      this.update_values();
    };

    this.observer = new MutationObserver(callback);
    this.observer.observe(targetNode, config);
  }

  @Method()
  async option_elements(): Promise<NodeListOf<HTMLStellarItemElement>> {
    return this.element.querySelectorAll('stellar-item:not([select-title])');
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
        <stellar-label size={this.size} onClick={() => { this.focusFirstItem() }}>{this.label}</stellar-label>
        {this.renderEmptyButton()}
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
    return this.multiple && this.value && this.value.length > 0 && <stellar-button class="clear-button" tag="button" size={this.size} ghost onClick={(e) => { e.stopPropagation(); this.clearValue() }}>
      <stellar-asset name="close" />
      {this.clear_confirm ? `Clear ${this.value.length} selections?` : `Clear`}
    </stellar-button>
  }

  render() {
    return (
      <div class="wrapper">
        {this.renderLabel()}

        <div class="select">
          {this.loading && <div class="loading"><stellar-asset name="loading-spin" /> <p>One sec...</p></div>}

          <button type="button" class="select-title" onClick={() => this.handleTitleClick()} onFocus={() => this.handleTitleFocus()} onBlur={() => this.handleTitleBlur()}>
            <stellar-item fit wrap select-title type="button" value={this.value ? this.value.toString() : ""} tabindex="-1" selectable={false} label={this.language} innerHTML={this.language}></stellar-item>
            <stellar-asset name="arrow-down" />

            {this.name && <input type="text" tabindex="-1" name={this.name.toString()} required={this.required} value={this.value} />}
          </button>

          {this.tooltip && <stellar-tooltip align="bottom-left" onClick={() => this.handleTitleClick()}>{this.tooltip}</stellar-tooltip>}

          <stellar-blur vertical={this.blur} class="select-list">
            <div class="select-list-header">
              <slot name="header"></slot>
            </div>

            <div class="select-list-body">
              <slot></slot>
            </div>

            {this.footer && <div class="select-list-footer"><slot name="footer"></slot></div>}
          </stellar-blur>
        </div>

        <stellar-label size="small" underneath>{this.description}</stellar-label>

        {!this.novalidate && this.renderErrors()}
      </div>
    );
  }
}
Tunnel.injectProps(Select, ['dark']);

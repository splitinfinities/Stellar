import { Component, Prop, State, Listen, Watch, Element, Event, EventEmitter, Method } from '@stencil/core';
import { blurringEase } from '../../global/helpers';

@Component({
  tag: 'stellar-select',
  styleUrl: 'select.css'
})

export class Select {
  @Element() element: HTMLElement;

  @Prop() name: string = "select";
  @Prop({ mutable: true }) label: string;
  @Prop({ mutable: true }) placeholder: string = "Choose something...";
  @Prop({ mutable: true, reflectToAttr: true }) inline: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) multiple: boolean;
  @Prop() other: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) size: string;
  @Prop() required: boolean = false;
  @Prop() processing: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) focused: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) open: boolean = false;
  @Prop() footer: boolean;
  @Prop({reflectToAttr: true}) overlay: boolean;
  @Prop({ mutable: true, reflectToAttr: true }) value: any = false;

  @State() current: any;
  @State() status: { errors?: any; valid?: boolean; level?: number; };
  @State() blur: number = 0;

  @State() values: Array<string> = [];

  @Event() change: EventEmitter;

  componentWillLoad () {
    const values = Array.from(this.element.querySelectorAll('stellar-item[selectable], stellar-item[selectable="true"]'))

    this.values = values.map((element: HTMLStellarItemElement) => {
      return element.value;
    })
  }

  componentDidLoad () {
    this.current = this.element.querySelector('stellar-item.current')
  }

  @Watch('open')
  handleOpenChange() {
    // @ts-ignore
    this.element.querySelector('button.select-title').focus()

    if (this.open === false) {
      blurringEase((data: number) => {
        this.blur = data * 10;
      }, 300, 275)
    } else if (this.open === true) {
      blurringEase((data: number) => {
        this.blur = data * 10;
      }, 200)
    }
  }

  @Listen('selectionChanged')
  selectionChangedHandler(event: CustomEvent) {
    const element = event.detail;

    if (!element.element.classList.contains("current")) {
      this.options().forEach((element) => {
        element.selected = false;
      })

      element.selected = true;
      this.value = element.value;

      this.change.emit(this.value);

      if (this.current) {
        this.current.apply(element.data());
      }

      this.open = false;

      // @ts-ignore
      this.element.querySelector('button.select-title').focus()
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

  @Method()
  validate() {
    const status = { valid: true, errors: [] };

    // @ts-ignore
    if (!this.value) {
      status.valid = false;
      status.errors.push({ message: 'This field is required.' });
    }

    // @ts-ignore
    if (!this.values.includes(this.value)) {
      status.valid = false;
      status.errors.push({ message: `"${this.value}" isn't a valid option.` });
    }

    this.status = status;

    return this.status;
  }

  options(): any {
    return this.element.querySelectorAll('stellar-item:not(.current)');
  }

  focusPaths() {
    let current = undefined;
    let next = undefined;
    let previous = undefined;
    const elements = this.options();

    elements.forEach((element, index) => {
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
    this.element.querySelector('.select-list stellar-item:first-of-type button').focus()
  }

  focusElement(element) {
    element.focus();
  }

  focusNextOption() {
    const elements = this.focusPaths();

    if (elements.next) {
      this.focusElement(elements.next);
    }
  }

  focusPreviousOption() {
    const elements = this.focusPaths();

    if (elements.previous) {
      this.focusElement(elements.previous);
    }
  }

  handleTitleClick() {
    this.open = true;
  }

  renderLabel() {
    if (this.label) {
      return (<stellar-label onClick={() => { this.focusFirstItem() }}>{this.label}</stellar-label>)
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

  render() {
    return (
      <div class="wrapper">

        { this.renderLabel() }

        <div class="select">
          <button type="button" class="select-title" onClick={() => this.handleTitleClick()} onFocus={() => this.handleTitleFocus()} onBlur={() => this.handleTitleBlur()}>
            <stellar-item class="current" value={this.value} tabindex="-1" selectable={false} label={this.value}>
              {this.value}
            </stellar-item>
            <stellar-asset name="arrow-down" />
            <input type="text" tabindex="-1" value={this.value} name={this.name} required={this.required} />
          </button>

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

        { this.renderErrors() }
      </div>
    );
  }
}

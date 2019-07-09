import { Component, Prop, State, Element, Method, Event, EventEmitter, h} from '@stencil/core';
import { RouterHistory, LocationSegments, injectHistory } from '@stencil/router';
import { delay } from '../../../utils';


@Component({
  tag: 'stellar-item',
  styleUrl: 'item.css',
  shadow: true
})
export class Item {
  @Element() element: HTMLElement;
  @Prop({mutable: true}) size: string;
  @Prop({reflectToAttr: true, mutable: true}) value: string;
  @Prop({reflectToAttr: true, mutable: true}) valueLabel: string;
  @Prop({reflectToAttr: true, mutable: true}) type: "a"|"button"|"stencil-route-link" = "button";
  @Prop({reflectToAttr: true, mutable: true}) label: string;
  @Prop({reflectToAttr: true, mutable: true}) href: string = "#";

  @Prop({reflectToAttr: true, mutable: true}) wrap: boolean = false;
  @Prop({reflectToAttr: true, mutable: true}) fit: boolean = false;
  @Prop({reflectToAttr: true, mutable: true}) simple: boolean = false;
  @Prop({reflectToAttr: true, mutable: true}) danger: boolean = false;

  @Prop({reflectToAttr: true, mutable: true}) selected: boolean = false;
  @Prop({reflectToAttr: true, mutable: true}) multiple: boolean = false;
  @Prop({reflectToAttr: true, mutable: true}) selectable: boolean = false;
  @Prop({reflectToAttr: true, mutable: true}) focused: boolean = false;
  @Prop({reflectToAttr: true, mutable: true}) selectTitle: boolean = false;

  @Prop() route: boolean = false;
  @Prop() history: RouterHistory;
  @Prop() location: LocationSegments;

  @State() current: boolean = false;
  @State() slotted: any;

  @State() select: HTMLStellarSelectElement;

  @Event() selectionChanged: EventEmitter;
  @Event() mounted: EventEmitter;
  @Event() focusChanged: EventEmitter;
  @Event() blurChanged: EventEmitter;

  componentWillLoad() {
    this.select = this.element.closest('stellar-select');
  }

  componentDidLoad() {
    setTimeout(() => {
      if (this.selected) {
        this.mounted.emit(this);
      }
    }, 10)
  }

  componentDidUnload() {
    this.selectionChanged.emit(this);
  }

  componentDidUpdate() {
    if (this.select) {
      this.select.update_values();
    }
  }

  @Method()
  async data() {
    return {
      size: this.size,
      value: this.value,
      type: this.type,
      label: this.label,
      danger: this.danger,
      slotted: this.element.innerHTML
    }
  }

  @Method()
  async apply(data) {
    this.size = data.size;
    this.value = data.value;
    this.type = data.type;
    this.label = data.label;
    this.element.innerHTML = data.slotted;

    if (this.selectTitle) {
      await delay(25);
      this.element.innerHTML = data.slotted;
    }
  }

  @Method()
  async setFocus() {
    this.focused = true;
    // @ts-ignore
    this.element.querySelector('.button').focus();
  }

  handleClick(e) {
    if (this.route) {
      e.preventDefault()
      this.history.push(this.href, {});
    }

    if (!this.current) {
      this.selectionChanged.emit(this);
    }
  }

  handleFocus() {
    if (this.current) {
      this.focusChanged.emit(this);
    }

    this.focused = true;
  }

  handleBlur() {
    if (this.current) {
      this.blurChanged.emit(this);
    }

    this.focused = false;
  }

  classes() {
    let classes = "";

    classes += this.selected ? "selected " : ""
    classes += this.multiple ? "multiple " : ""

    return classes;
  }

  @Method()
  async select_item(state?: {selected: boolean}) {
    if (this.selectable) {
      if (state) {
        if (this.selected !== state.selected) {
          var event = new CustomEvent('click');
          this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
        }
      } else {
        var event = new CustomEvent('click');
        this.element.shadowRoot.querySelector('.button').dispatchEvent(event);
      }
    }
  }

  render () {
    return (
      <this.type class="button" type="button" href={this.href} url={this.href} tabindex="0" value={this.value} title={this.label} onClick={(e) => this.handleClick(e)} onBlur={() => this.handleBlur()} onFocus={() => this.handleFocus()}>
        <div class="content">
          <slot />
        </div>
        { (this.selected || this.multiple) && <stellar-asset class={this.classes()} name="checkmark" block></stellar-asset> }
      </this.type>
    )
  }
}

if (injectHistory) {
  injectHistory(Item);
}

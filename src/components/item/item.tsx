import { Component, Prop, State, Element, Method, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'stellar-item',
  styleUrl: 'item.css'
})
export class Item {
  @Element() element: HTMLElement;
  @Prop({mutable: true}) size: string;
  @Prop({reflectToAttr: true, mutable: true}) value: string;
  @Prop({reflectToAttr: true, mutable: true}) type: "a"|"button"|"stencil-route-link" = "button";
  @Prop({reflectToAttr: true, mutable: true}) label: string;
  @Prop({reflectToAttr: true, mutable: true}) href: string = "#";

  @Prop({reflectToAttr: true, mutable: true}) fit: boolean = false;
  @Prop({reflectToAttr: true, mutable: true}) danger: boolean = false;

  @Prop({reflectToAttr: true, mutable: true}) selected: boolean;
  @Prop({reflectToAttr: true, mutable: true}) selectable: boolean = true;
  @Prop({reflectToAttr: true, mutable: true}) focused: boolean = false;

  @State() current: boolean = false;
  @State() slotted: any;

  @Event() selectionChanged: EventEmitter;
  @Event() focusChanged: EventEmitter;
  @Event() blurChanged: EventEmitter;

  componentWillLoad() {
    this.slotted = this.element.innerHTML;
  }

  componentDidLoad() {
    setTimeout(() => {
      if (this.selected) {
        this.selectionChanged.emit(this);
      }
    }, 10)
  }

  @Method()
  data() {
    return {
      size: this.size,
      value: this.value,
      type: this.type,
      label: this.label,
      danger: this.danger,
      slotted: this.slotted
    }
  }

  @Method()
  apply(data) {
    this.size = data.size;
    this.value = data.value;
    this.type = data.type;
    this.label = data.label;

    const button = this.element.querySelector('.button');
    button.innerHTML = data.slotted;
  }


  @Method()
  setFocus() {
    this.focused = true;
    // @ts-ignore
    this.element.querySelector('.button').focus();
  }

  handleClick() {
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

  render () {
    return (
      <this.type class="button" type="button" href={this.href} url={this.href} tabindex="0" value={this.value} title={this.label} onClick={ () => this.handleClick()} onBlur={() => this.handleBlur()} onFocus={() => this.handleFocus()}>
        <slot></slot>
        { this.selected && <stellar-asset class="selected" name="checkmark" block></stellar-asset> }
      </this.type>
    )
  }
}

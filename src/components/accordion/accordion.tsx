import { Component, Element, Prop, State, Method } from '@stencil/core'
import properties from 'css-custom-properties'
import { blurringEase } from '../../global/helpers';

@Component({
  tag: 'stellar-accordion',
  styleUrl: 'accordion.css'
})
export class Accordion {
  @Element() element: HTMLElement;

  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false
  @Prop({reflectToAttr: true}) tight: boolean = false

  @Prop() name: string = "accordion"
  @Prop() label: string = "More Details"

  @State() blur: number = 0;
  @State() expander: HTMLElement;
  @State() observer: MutationObserver;

  componentWillLoad() {
    var callback = (mutationsList) => {
        for (var mutation of mutationsList) {
            if (mutation.type == 'childList') {
              this.refresh()
            }
        }
    };

    this.observer = new MutationObserver(callback);
  }

  componentDidLoad() {
    this.expander = this.element.querySelector(".expander");
    this.refresh();
    this.attachObserver();
  }

  @Method()
  refresh() {
    properties.set({
      "--accordion-height": `${this.expander.scrollHeight}px`
    }, this.element);
  }

  attachObserver() {
    // Start observing the target node for configured mutations
    this.observer.observe(this.element, { childList: true, subtree: true });
  }

  componentWillUnload() {
    this.observer.disconnect();
  }

  currentClasses() {
    return `expander ${this.openClass()}`
  }

  openClass() {
    return (this.open) ? "open" : ""
  }

  handleClick() {
    this.open = !this.open

    blurringEase((e: number) => {
      this.blur = e * 10
    })
  }

  render() {
    return (
      <div class="wrap">
        <div class="button-wrap" onClick={ () => this.handleClick() }>
          <slot name="label">
            <stellar-button id="button" tag="button" ghost label={this.label}>{this.label}</stellar-button>
          </slot>
          <stellar-asset class="chevron" name="arrow-down"></stellar-asset>
        </div>

        <stellar-blur vertical={this.blur}>
          <div class={this.currentClasses()}>
            <slot></slot>
          </div>
        </stellar-blur>
      </div>
    )
  }
}

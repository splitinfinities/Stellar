import { Component, Element, Prop, State, Method } from '@stencil/core'
import { blurringEase, properties } from '../../../utils';

@Component({
  tag: 'stellar-accordion',
  styleUrl: 'accordion.css',
  shadow: true
})
export class Accordion {
  @Element() element: HTMLElement;

  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false
  @Prop({reflectToAttr: true}) tight: boolean = false

  @Prop() name: string = "accordion"
  @Prop() label: string = "More Details"

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
      this.ease.stop()
    },
  });
  @State() expander: HTMLElement;
  @State() observer: MutationObserver;

  @State() els: any = [];

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
    this.expander = this.element.shadowRoot.querySelector(".expander");
    this.refresh();
    this.attachObserver();
    this.els = Array.from(this.element.querySelectorAll("*:not([slot='label'])"));
    this.updateTabIndex();
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

  updateTabIndex() {
    this.els.forEach((element) => {
      element.tabIndex = !this.open ? -1 : 0;
    })
  }

  handleClick() {
    this.open = !this.open
    this.ease.start()
    this.updateTabIndex();
  }

  render() {
    return (
      <div class="wrap">
        <div class="button-wrap" title="Selecting this opens the content of this accordion" onClick={ () => this.handleClick() }>
          <slot name="label">
            <stellar-button id="button" tag="button" ghost label={this.label}>{this.label}</stellar-button>
          </slot>
          <stellar-asset class="chevron" name="arrow-down"></stellar-asset>
        </div>

        <stellar-blur vertical={this.blur}>
          <div class={this.currentClasses()} tabIndex={!this.open ? -1 : 0} >
            <slot></slot>
          </div>
        </stellar-blur>
      </div>
    )
  }
}

import { Component, Prop, State, Element, Method} from '@stencil/core';
import { blurringEase } from '../../../utils';

@Component({
  tag: 'stellar-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})

export class Tabs {
  @Element() element: HTMLElement;

  @Prop() height: string;
  @Prop({mutable: true, reflectToAttr: true}) name: string;
  @Prop({mutable: true, reflectToAttr: true}) noanimation: boolean = false;

  @Prop({reflectToAttr: true}) size: string|"tiny"|"small"|"medium"|"large" = "medium";
  @Prop({reflectToAttr: true}) block: boolean = false;
  @Prop({reflectToAttr: true}) vertical: boolean = false;
  @Prop({reflectToAttr: true}) behavior: string;

  @State() tabsList: Array<HTMLStellarTabElement>;
  @State() contentsList: Array<HTMLStellarContentElement>;
  @State() ease: TweenInstance = blurringEase({
    end: 10,
    start: -1,
    duration: 125,
    tick: (args) => {
      this.blur = args.value;
    },
    complete: () => {
      this.blur = 0;
      this.ease.stop();
    },
  });

  @State() blur: number = 0;

  @Method()
  async tabs() {
    if (!this.tabsList || this.tabsList.length === 0) {
      this.tabsList = Array.from(this.element.querySelectorAll('stellar-tab'));
    }

    return this.tabsList;
  }

  @Method()
  async contents() {
    this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
    return this.contentsList;
  }

  @Method()
  async blurring() {
    this.ease.start();
  }

  async componentWillLoad () {
    await this.tabs();
    await this.contents();
  }

  async componentDidLoad () {
    if (!this.noanimation) {
      setTimeout(() => {
        // @ts-ignore
        window.dispatchEvent(new Event('resize'));
        this.element.shadowRoot.querySelector('.indicator').classList.add('ready');
      }, 100)
    }

    const tabs = await this.tabs()
    const tabCount = tabs.length;

    tabs.forEach((tab, index) => {
      tab.order = index + 1;
      tab.tabCount = tabCount;
    })
  }

  render() {
    return (
      <div class="tab-wrap">
        <div class="tab-list" role="tablist">
          <slot></slot>
          <stellar-blur horizontal={!this.vertical ? this.blur : 0} vertical={this.vertical ? this.blur : 0}><div class="indicator"></div></stellar-blur>
        </div>
      </div>
    );
  }
}

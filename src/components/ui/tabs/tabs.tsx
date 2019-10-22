import { Component, Prop, State, Element, Method, h, Watch } from '@stencil/core';
import { blurringEase } from '../../../utils';
import Tunnel from '../../theme';

@Component({
  tag: 'stellar-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})

export class Tabs {
  @Element() element: HTMLElement;

  @Prop() height: string;
  @Prop({mutable: true, reflect: true}) name: string;
  @Prop({mutable: true, reflect: true}) noanimation: boolean = false;

  @Prop({reflect: true}) size: "tiny"|"small"|"medium"|"large";
  @Prop({reflect: true}) block: boolean = false;
  @Prop({reflect: true}) vertical: boolean = false;
  @Prop({reflect: true}) dark: boolean = false;
  @Prop({reflect: true}) behavior: string;
  @Prop({reflect: true}) flipIndicator: boolean;
  @Prop({reflect: true}) blockIndicator: boolean;

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

    this.tabsList.forEach((tab) => {
      if (this.dark) {
        tab.dark = this.dark;
      }
      if (this.vertical) {
        tab.vertical = this.vertical;
      }
    })
  }

  @Watch('dark')
  handleDark() {
    this.tabsList.forEach((tab) => {
      tab.dark = this.dark;
    })
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
Tunnel.injectProps(Tabs, ['dark']);

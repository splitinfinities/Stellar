import { Component, Prop, State, Element, Method } from '@stencil/core';

@Component({
  tag: 'stellar-tabs',
  styleUrl: 'tabs.css'
})

export class Tabs {
  @Element() element: HTMLElement;

  @Prop() height: string;
  @Prop({mutable: true, reflectToAttr: true}) name: string;
  @Prop({mutable: true, reflectToAttr: true}) noanimation: boolean = false;

  @Prop({reflectToAttr: true}) block: boolean = false;

  @State() tabsList: Array<HTMLStellarTabElement>;
  @State() contentsList: Array<HTMLStellarContentElement>;

  @Prop({mutable: true}) blurring: number = 0;

  @Method()
  tabs() {
    if (!this.tabsList || this.tabsList.length === 0) {
      this.tabsList = Array.from(this.element.querySelectorAll('stellar-tab'));
    }

    return this.tabsList;
  }

  @Method()
  contents() {
    this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
    return this.contentsList;
  }

  componentWillLoad () {
    this.tabs();
    this.contents();
  }

  componentDidLoad () {
    if (!this.noanimation) {
      setTimeout(() => {
        // @ts-ignore
        window.dispatchEvent(new Event('resize'));
        this.element.querySelector('.indicator').classList.add('ready');
      }, 100)
    }

    const tabCount = this.tabs().length;

    this.tabs().forEach((tab, index) => {
      tab.order = index + 1;
      tab.tabCount = tabCount;
    })
  }

  render() {
    return (
      <div class="tab-wrap">
        <div class="tab-list" role="tablist">
          <slot></slot>
          <stellar-blur horizontal={this.blurring}><div class="indicator"></div></stellar-blur>
        </div>
      </div>
    );
  }
}

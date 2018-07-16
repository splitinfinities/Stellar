import { Component, Prop, State, Element, Method } from '@stencil/core';

@Component({
  tag: 'stellar-tabs',
  styleUrl: 'tabs.css'
})

export class Tabs {
  @Element() element: HTMLElement;

  @Prop({mutable: true, reflectToAttr: true}) name: string;
  @Prop({mutable: true, reflectToAttr: true}) noanimation: boolean = false;

  @Prop({reflectToAttr: true}) block: boolean = false;

  @State() tabsList: NodeListOf<any>;
  @State() contentsList: NodeListOf<any>;

  @Prop({mutable: true}) blurring: number = 0;

  @Method()
  tabs() {
    if (this.tabsList.length === 0) {
      this.tabsList = this.element.querySelectorAll('stellar-tab');
    }

    return this.tabsList;
  }

  @Method()
  contents() {
    this.contentsList = document.querySelectorAll(`stellar-content[for='${this.name}']`);
    return this.contentsList;
  }

  componentWillLoad () {
    this.tabsList = this.element.querySelectorAll('stellar-tab');
    this.contentsList = document.querySelectorAll(`stellar-content[for='${this.name}']`);
  }

  componentDidLoad () {
    if (!this.noanimation) {
      setTimeout(() => {
        // @ts-ignore
        window.dispatchEvent(new Event('resize'));
        this.element.querySelector('.indicator').classList.add('ready');
      }, 100)
    }
  }

  render() {
    return (
      <div class="tab-wrap">
        <div class="tab-list">
          <slot></slot>
          <stellar-blur horizontal={this.blurring}><div class="indicator"></div></stellar-blur>
        </div>
      </div>
    );
  }
}

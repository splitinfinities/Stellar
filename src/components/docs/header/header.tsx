import { Component, Prop, Watch, h } from '@stencil/core';
import Tunnel from '../dependencies';

@Component({
  tag: 'stellar-docs-header'
})
export class DocsHeader {
  @Prop({mutable: true}) theme: string = "red";
  @Prop({mutable: true}) complement: string = "indigo";
  @Prop() mark: string;
  @Prop() max: number = 10;
  @Prop() value: number = 0;
  @Prop() package: any;
  @Prop() ready: boolean;

  @Watch('theme')
  @Watch('complement')
  handleTheming() {
    document.querySelector('body').setAttribute('class', `theme-${this.theme} complement-${this.complement}`);
  }

  render() {
    return this.ready && [
      <stellar-message striped type="alert" size="full">
        <stellar-asset name="happy"></stellar-asset>
          <p>Stellar is still an alpha product - some things may change! We'll do out best to notify you when something changes.</p>
        <stellar-button size="tiny" pill>See change log <stellar-asset name="arrow-forward" align="right"></stellar-asset></stellar-button>
      </stellar-message>,
      <stellar-layout size="large" class="relative mb5" type="sidebar-right">
        <stellar-starscape></stellar-starscape>
        <copy-wrap class="mv5">
          <slot name="title">
            <h1 class="flex fs-massive">
              <div class="flex mr4 flex-column items-center">
                <stellar-icon src="/global/vector/mark.svg"></stellar-icon>
                <stellar-tag color="blue5" class="mt4">v{this.package && this.package.version}</stellar-tag>
              </div>
              <div>
                <h1 class="fw7 lh-solid theme-base0">Stellar</h1>
                <h3 class="db fs4 fw7 theme-complement2 w-100">A Beautiful, Complete Design System</h3>
                <stellar-code-block simple={true} class="w-60" codeString={`npm install @stellar-design/core`} language="bash"></stellar-code-block>
              </div>
            </h1>
          </slot>
        </copy-wrap>
        <stellar-card>
          <stellar-grid compact>
            <stellar-select label="Primary color" onUpdate={(e) => { this.theme = e.detail }} size="small" overlay>
              <stellar-item value="red" selected>Red</stellar-item>
              <stellar-item value="orange">Orange</stellar-item>
              <stellar-item value="yellow">Yellow</stellar-item>
              <stellar-item value="lime">Lime</stellar-item>
              <stellar-item value="green">Green</stellar-item>
              <stellar-item value="teal">Teal</stellar-item>
              <stellar-item value="cyan">Cyan</stellar-item>
              <stellar-item value="blue">Blue</stellar-item>
              <stellar-item value="indigo">Indigo</stellar-item>
              <stellar-item value="violet">Violet</stellar-item>
              <stellar-item value="fuchsia">Fuchsia</stellar-item>
              <stellar-item value="pink">Pink</stellar-item>
              <stellar-item value="gray">Gray</stellar-item>
            </stellar-select>

            <stellar-select label="Secondary color" onUpdate={(e) => { this.complement = e.detail }} size="small" overlay>
              <stellar-item value="red">Red</stellar-item>
              <stellar-item value="orange">Orange</stellar-item>
              <stellar-item value="yellow">Yellow</stellar-item>
              <stellar-item value="lime">Lime</stellar-item>
              <stellar-item value="green">Green</stellar-item>
              <stellar-item value="teal">Teal</stellar-item>
              <stellar-item value="cyan">Cyan</stellar-item>
              <stellar-item value="blue">Blue</stellar-item>
              <stellar-item value="indigo" selected>Indigo</stellar-item>
              <stellar-item value="violet">Violet</stellar-item>
              <stellar-item value="fuchsia">Fuchsia</stellar-item>
              <stellar-item value="pink">Pink</stellar-item>
              <stellar-item value="gray">Gray</stellar-item>
            </stellar-select>
          </stellar-grid>
        </stellar-card>
      </stellar-layout>
    ];
  }
}

Tunnel.injectProps(DocsHeader, ['package', 'ready']);

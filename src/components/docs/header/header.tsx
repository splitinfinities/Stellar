import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'stellar-docs-header',
  styleUrl: 'header.css'
})
export class DocsHeader {
  @Prop() invert: boolean = false;
  @Prop() mark: string;
  @Prop() max: number = 10;
  @Prop() value: number = 0;
  @State() data;

  async componentWillLoad() {
    this.data = await window["deps"].fetchPackage();
  }

  render() {
    return [
      <stellar-message striped type="alert" size="full">
        <stellar-asset name="happy"></stellar-asset>
        <p>Stellar is still an alpha product - some things may change! We'll do out best to notify you when something changes.</p>
        <stellar-button size="tiny" pill>See change log <stellar-asset name="arrow-forward" align="right"></stellar-asset></stellar-button>
      </stellar-message>,
      <stellar-layout size="full" class="relative mb5" type="sidebar-right">
        <stellar-starscape></stellar-starscape>
        <copy-wrap class="invert mv5">
          <slot name="title">
            <h1 class="flex fs-massive white">
              <div class="flex mr4 flex-column items-center">
                <stellar-asset src="/global/vector/mark.svg"></stellar-asset>
                <stellar-tag color="blue5" class="mt4">v{this.data && this.data.version}</stellar-tag>
              </div>
              <div>
                <h1 class="fs-large white lh-solid">Stellar!</h1>
                <h3 class="fs1 db w-100 gray2">A Beautiful, Complete Design System</h3>
                <stellar-code-block simple={true} class="w-60" codeString={`npm install @stellar-design/core}`} language="bash"></stellar-code-block>
              </div>
            </h1>
          </slot>
        </copy-wrap>
        <stellar-card>
          <stellar-grid compact>
            <stellar-select label="Primary color" onChange={(e) => { console.log(e.detail); }} size="small" overlay>
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

            <stellar-select label="Secondary color" onChange={(e) => { console.log(e.detail); }} size="small" overlay>
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

            <stellar-toggle type="checkbox">
              <stellar-toggle-option value="inverted">Inverted</stellar-toggle-option>
            </stellar-toggle>
          </stellar-grid>
        </stellar-card>
      </stellar-layout>
    ];
  }
}






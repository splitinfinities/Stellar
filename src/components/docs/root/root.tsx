import { Component, State } from '@stencil/core';
import { Dependencies, Load } from '../loadDependencies';

@Component({
  tag: 'stellar-docs',
  styleUrl: 'root.css'
})
export class DocsRoot {

  @State() load: Load = Dependencies.get();
  @State() themePrimary: string = "red";
  @State() themeComplement: string = "indigo";

  componentWillLoad() {
    this.load.perform();
  }

  version () {
    return this.load && this.load.package && this.load.package.version || "0.0.0"
  }

  description () {
    return this.load && this.load.package && this.load.package.description || "A Beautiful, Complete Design System"
  }

  render() {
    return (
      <div class={`theme-${this.themePrimary} complement-${this.themeComplement}`}>
        <stellar-layout size="full" class="relative mb5" type="sidebar-right">
          <stellar-starscape></stellar-starscape>
          <copy-wrap class="invert mv5">
            <h1 class="flex fs-massive white">
              <div class="flex mr4 flex-column items-center">
                <stellar-asset src="/global/vector/mark.svg"></stellar-asset>
                <stellar-tag color="blue5" class="mt4">v{ this.version() }</stellar-tag>
              </div>
              <div>
                <h1 class="fs-large white lh-solid">Stellar!</h1>
                <h3 class="fs1 db w-100 gray2">{ this.description() }</h3>
                <stellar-code-block simple={true} class="w-60" codeString="npm install @stellar-design/core" language="bash"></stellar-code-block>
              </div>
            </h1>
          </copy-wrap>
          <stellar-card>
            <stellar-grid compact>
              <stellar-select label="Primary color" onChange={(e) => { this.themePrimary = e.detail; }} size="small" overlay>
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

              <stellar-select label="Secondary color" onChange={(e) => { this.themeComplement = e.detail; }} size="small" overlay>
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

        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='stellar-docs-home' exact={true} />
            <stencil-route url='/component/:name' component='stellar-docs-component' />
            <stencil-route url='/:name' component='stellar-docs-page' exact={true} />
            <stencil-route component="stellar-docs-not-found" />
          </stencil-route-switch>
        </stencil-router>

        <stellar-footer></stellar-footer>
      </div>
    );
  }
}

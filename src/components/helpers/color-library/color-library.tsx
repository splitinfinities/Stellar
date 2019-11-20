import { Component, h, Prop, Host } from '@stencil/core';
import {colors} from '../../../utils'
@Component({
  tag: 'stellar-color-library',
  styleUrl: 'color-library.css'
})

export class ColorLibrary {

  @Prop() colors: string;

  _colors: {
    "base": string,
    "white": string,
    "black": string,
    "black-alt": string,
    "gray": string[],
    "red": string[],
    "orange": string[],
    "yellow": string[],
    "lime": string[],
    "green": string[],
    "teal": string[],
    "cyan": string[],
    "blue": string[],
    "indigo": string[],
    "violet": string[],
    "fuschia": string[],
    "pink": string[]
  } = colors

  componentWillLoad() {
    if (typeof this.colors === "string" && this.colors.constructor.name === "String") {
      this._colors = JSON.parse(this.colors);
    }
  }

  hexStyle = color => `fw6 ttu tc ${color === "base" ? "black" : "base"} mv5`;

  renderColorPallette(color) {
    const range = this._colors[color];

    return [
      <stellar-grid cols="6" class="pa4">
        { range.map((code, index) => {
            return (
              <stellar-card padding="tiny" class={`theme-${color} bn`} style={{"--background":`var(--theme-base${index})`}}>
                <section>
                  <h6 class={this.hexStyle(`theme-base${index}`)}>{code}</h6>
                </section>
              </stellar-card>
            )
          })
        }
      </stellar-grid>
    ]
  }

  render() {
    return (
      <Host>
        <stellar-grid class="pa4">
          <stellar-card padding="tiny" style={{"--background":`var(--base)`}}>
            <section>
              <h6 class={this.hexStyle(`base`)}>{this._colors.base}</h6>
            </section>
          </stellar-card>
          <stellar-card padding="tiny" style={{"--background":`var(--white)`}}>
            <section>
              <h6 class={this.hexStyle(`white`)}>{this._colors.white}</h6>
            </section>
          </stellar-card>
          <stellar-card padding="tiny" style={{"--background":`var(--black)`}}>
            <section>
              <h6 class={this.hexStyle(`black`)}>{this._colors.black}</h6>
            </section>
          </stellar-card>
          <stellar-card padding="tiny" style={{"--background":`var(--black-alt)`}}>
            <section>
              <h6 class={this.hexStyle('black-alt')}>{this._colors["black-alt"]}</h6>
            </section>
          </stellar-card>
        </stellar-grid>
        { this._colors.gray && this.renderColorPallette("gray") }
        { this._colors.red && this.renderColorPallette("red") }
        { this._colors.orange && this.renderColorPallette("orange") }
        { this._colors.yellow && this.renderColorPallette("yellow") }
        { this._colors.lime && this.renderColorPallette("lime") }
        { this._colors.green && this.renderColorPallette("green") }
        { this._colors.teal && this.renderColorPallette("teal") }
        { this._colors.cyan && this.renderColorPallette("cyan") }
        { this._colors.blue && this.renderColorPallette("blue") }
        { this._colors.indigo && this.renderColorPallette("indigo") }
        { this._colors.violet && this.renderColorPallette("violet") }
        { this._colors.fuschia && this.renderColorPallette("fuschia") }
        { this._colors.pink && this.renderColorPallette("pink") }
      </Host>
    );
  }
}

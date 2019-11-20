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

  hexStyle = color => `f-invert fw6 ttu ${color} mv5`;

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
        { this.renderColorPallette("gray") }
        { this.renderColorPallette("red") }
        { this.renderColorPallette("orange") }
        { this.renderColorPallette("yellow") }
        { this.renderColorPallette("lime") }
        { this.renderColorPallette("green") }
        { this.renderColorPallette("teal") }
        { this.renderColorPallette("cyan") }
        { this.renderColorPallette("blue") }
        { this.renderColorPallette("indigo") }
        { this.renderColorPallette("violet") }
        { this.renderColorPallette("fuschia") }
        { this.renderColorPallette("pink") }
      </Host>
    );
  }
}

import { Component} from '@stencil/core';
import {colors} from '../../../utils'
@Component({
  tag: 'stellar-color-library',
  styleUrl: 'color-library.css'
})

export class ColorLibrary {

  renderColorPallette(color) {
    const range = colors[color]

    return [
      <stellar-grid cols="6">
        { range.map((code, index) => {
            return (
              <stellar-card padding="tiny">
                <div class={`aspect-ratio aspect-ratio--16x9 flex items-center justify-around`} style={{"background-color": `var(--${color}${index})`}}>
                  <div class="aspect-ratio--object flex items-center justify-around ">
                    <h5 class={`f-invert fw6 ttu ${color}${index}`}>{code}</h5>
                  </div>
                </div>
                <div class="pv3 ph4 tc nt4 bg-white relative">
                  <div class="dt w-100">
                    <div class="dtc">
                      <p class="f5 f4-ns mv0 black">var(--{color}{index})</p>
                    </div>
                  </div>
                </div>
              </stellar-card>
            )
          })
        }
      </stellar-grid>
    ]
  }

  render() {
    return (
      <div>
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
        { this.renderColorPallette("fuchsia") }
        { this.renderColorPallette("pink") }
      </div>
    );
  }
}

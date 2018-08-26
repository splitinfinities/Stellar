import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-theme-preview',
  styleUrl: 'theme-preview.css'
})

export class ThemePreview {
  @Prop({mutable: true}) base: string = "red";
  @Prop({mutable: true}) complement: string = "indigo";

  render() {
    return (
      <div class={`theme-${this.base} complement-${this.complement}`}>
        <h4 class="mb4">Base: {this.base}, Complement: {this.complement}</h4>

        <stellar-grid style={{ "--grid-width": "200px" }}>
          <stellar-color-picker value={this.base} onColorChanged={(e) => { this.base = e.detail }}></stellar-color-picker>
          <stellar-color-picker value={this.complement} onColorChanged={(e) => { this.complement = e.detail }}></stellar-color-picker>
        </stellar-grid>

        <stellar-grid style={{ "--grid-width": "200px" }}>
          <div class="fs-massive flex items-center justify-center">
            <stellar-asset src="./global/vector/mark.svg"></stellar-asset>
          </div>
          <div class="ba b--gray0 pa5 db bg-theme-base0"></div>
          <div class="ba b--gray0 pa5 db bg-theme-base1"></div>
          <div class="ba b--gray0 pa5 db bg-theme-base2"></div>
          <div class="ba b--gray0 pa5 db bg-theme-base3"></div>
          <div class="ba b--gray0 pa5 db bg-theme-base4"></div>
          <div class="ba b--gray0 pa5 db bg-theme-base5"></div>
          <div class="ba b--gray0 pa5 db bg-theme-base6"></div>
          <div class="ba b--gray0 pa5 db bg-theme-base7"></div>
          <div class="ba b--gray0 pa5 db bg-theme-base8"></div>
          <div class="ba b--gray0 pa5 db bg-theme-base9"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement0"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement1"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement2"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement3"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement4"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement5"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement6"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement7"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement8"></div>
          <div class="ba b--gray0 pa5 db bg-theme-complement9"></div>
        </stellar-grid>
      </div>
    );
  }
}

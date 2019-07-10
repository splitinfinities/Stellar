import { Component, Prop, State, Watch, Element, h, Host } from '@stencil/core';
import { titleCase, colors } from '../../../utils';

@Component({
  tag: 'stellar-avatar',
  styleUrl: 'avatar.css',
  shadow: true
})
export class Avatar {
  @Element() element: HTMLElement;

  @Prop() src: string;
  @Prop() notooltip: boolean = false;
  @Prop({mutable: true, reflect: true}) size: "tiny"|"small"|"medium"|"large";
  @Prop({mutable: true, reflect: true}) color: string = "auto";
  @Prop({mutable: true, reflect: true}) name: string = "Stellar";
  @Prop({mutable: true, reflect: true}) initials: string = "ST";
  @Prop({mutable: true, reflect: true}) shape: "circle"|"square"|"rectangle"|"diamond"|"hexagon"|"star"|"message" = "square";
  @Prop({mutable: true, reflect: true}) processing: boolean = false;

  @State() colorAuto: boolean = false;
  @State() colors: string[];
  @State() focus: boolean;

  componentWillLoad() {
    this.colors = Object.keys(colors).filter((color) => {
      // @ts-ignore
      return !["base", "white", "black"].includes(color)
    })

    if (this.color === "auto") {
      this.colorAuto = true;
    }

    this.formatName()
  }

  @Watch('name')
  formatName() {
    if (this.processing) {
      this.initials = "";
      return;
    }

    if (this.color === "auto" || this.colorAuto) {
      this.colorAuto = true;
      this.color = this.colors[this.name.length % this.colors.length];
    }

    if (!this.name.length) {
      this.initials = "ST";
    } else {
      var the_name = titleCase(this.name);
      if (this.size === "large" || this.size === "medium") {
         this.initials = the_name.replace(/[^A-Z]/g, '').substring(0, 2);
      } else {
        this.initials = the_name.substring(0, 1);
      }
    }

    if (this.shape === "star" || this.shape === "diamond" ) {
      this.initials = this.initials.substring(0, 1);
    }
  }

  render() {
    return <Host class={`theme-${this.color}`}>
      <button class="wrapper" title={`You tabbed on an Avatar for ${this.name}`} onFocus={()=> { this.focus = true; }} onBlur={()=> { this.focus = false; }}>
        {this.processing && <div class="processing"><stellar-avatar src="Loading" /></div>}
        <div class="content">
          <div class="spacer"></div>
          <div class="letter" title={this.name}>{this.initials}</div>
          { this.src && <img src={this.src} alt={this.name} /> }
        </div>
        {!this.notooltip && <stellar-tooltip focused={this.focus}>{this.name}</stellar-tooltip>}
      </button>
    </Host>
  }
}

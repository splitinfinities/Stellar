import { Component, Element, Prop, State, Watch } from '@stencil/core';
import titleCase from 'title-case'
import properties from 'css-custom-properties'
import isHexColor from 'validator/lib/isHexColor';
import { colors } from '../../../global/colors';

@Component({
  tag: 'stellar-avatar',
  styleUrl: 'avatar.css'
})
export class Avatar {
  @Element() element: HTMLElement;

  @Prop() src: string;
  @Prop() notooltip: boolean = false;
  @Prop({mutable: true, reflectToAttr: true}) size: string = "medium";
  @Prop({mutable: true, reflectToAttr: true}) color: string = "auto";
  @Prop({mutable: true, reflectToAttr: true}) name: string = "Stellar";
  @Prop({mutable: true, reflectToAttr: true}) initials: string = "ST";
  @Prop({mutable: true, reflectToAttr: true}) shape: "circle"|"square"|"rectangle"|"diamond"|"hexagon"|"star"|"message" = "square";
  @Prop({mutable: true, reflectToAttr: true}) processing: boolean = false;

  @State() colorAuto: boolean = false;
  @State() colors: string[];

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

  @Watch('color')
  updateColor() {
    let color = 'rgba(0, 0, 0, 0)';
    let colorDark = 'rgba(0, 0, 0, 0)';
    let fontColor = 'rgba(255, 255, 255, 1)';

    if (!this.src) {
      if (isHexColor(this.color)) {
        color = this.color
      } else {
        color = `var(--${this.color}5)`
        colorDark = `var(--${this.color}6)`
        fontColor = `var(--white)`
      }
    }

    properties.set({
      '--avatar-color': color,
      '--avatar-color-dark': colorDark,
      '--avatar-font-color': fontColor,
    },  this.element);
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

    this.updateColor();
  }

  render() {
    return (
      <div class="wrapper">
        {this.processing && <div class="processing"><stellar-avatar src="Loading" /></div>}
        <div class="content">
          <div class="letter" title={this.name}>{this.initials}</div>
          { this.src && <img src={this.src} alt={this.name} /> }
          <div class="spacer"></div>
        </div>
        {!this.notooltip && <stellar-tooltip>{this.name}</stellar-tooltip>}
      </div>
    );
  }
}

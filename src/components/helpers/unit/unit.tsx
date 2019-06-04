import { Component, Prop } from '@stencil/core';
import convert from 'convert-units';
import roundTo from 'round-to';

@Component({
  tag: 'stellar-unit',
  styleUrl: 'unit.css'
})
export class Unit {
  @Prop({reflectToAttr: true}) value: number = 1000;
  @Prop({reflectToAttr: true}) from: string = "B";
  @Prop({reflectToAttr: true}) to: string = "KB";
  @Prop({reflectToAttr: true}) money: boolean = false;
  @Prop({reflectToAttr: true}) round: boolean = false;
  @Prop({reflectToAttr: true}) decimals: number = 2;

  render () {
    if (!this.money) {
      return roundTo(convert(this.value).from(this.from).to(this.to), this.decimals) + " " + this.to;
    } else {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.to }).format(this.value)
    }
  }
}

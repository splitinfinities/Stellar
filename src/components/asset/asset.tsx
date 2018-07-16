import { Component, Prop } from '@stencil/core';
import "ionicons";

@Component({
  tag: 'stellar-asset',
  styleUrl: 'asset.css'
})
export class Asset {
  @Prop({reflectToAttr: true}) src: string;
  @Prop({reflectToAttr: true}) name: string;
  @Prop({reflectToAttr: true}) language: string = "ios-";
  @Prop({reflectToAttr: true}) align: string;

  @Prop() block: boolean = false;

  render () {
    return (
      <div class="icon-wrap">
        <ion-icon src={!this.name && this.src ? this.src : undefined} name={!this.src && this.name ? this.language + this.name : undefined}></ion-icon>
      </div>
    );
  }
}

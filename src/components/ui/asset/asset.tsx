import { Component, Prop } from '@stencil/core';
import "ionicons";

@Component({
  tag: 'stellar-asset',
  styleUrl: 'asset.css',
  shadow: true
})
export class Asset {
  @Prop({reflectToAttr: true}) src: string;
  @Prop({reflectToAttr: true}) name: string = "person";
  @Prop({reflectToAttr: true}) language: string = "ios-";
  @Prop({reflectToAttr: true}) align: string;
  @Prop({reflectToAttr: true, mutable: true}) ariaLabel: string;

  componentWillLoad() {
    this.ariaLabel = this.name
      .replace('ios-', '')
      .replace('md-', '')
      .replace(/\-/g, ' ');
  }

  @Prop() block: boolean = false;

  render () {
    return (
      <div class="icon-wrap">
        <ion-icon src={!this.name && this.src ? this.src : undefined} name={!this.src && this.name ? this.language + this.name : undefined} ariaLabel={this.ariaLabel} aria-label={this.ariaLabel}></ion-icon>
      </div>
    );
  }
}

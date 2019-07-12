import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'stellar-asset',
  styleUrl: 'asset.css',
  shadow: true
})
export class Asset {
  @Prop({reflect: true}) src: string;
  @Prop({reflect: true}) name: string = "person";
  @Prop({reflect: true}) language: string = "ios-";
  @Prop({reflect: true}) align: string;
  @Prop({reflect: true, mutable: true}) ariaLabel: string;

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
        <stellar-icon src={this.src} name={this.name} ariaLabel={this.ariaLabel} aria-label={this.ariaLabel}></stellar-icon>
      </div>
    );
  }
}

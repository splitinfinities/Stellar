import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-breadcrumbs',
  styleUrl: 'breadcrumbs.css'
})

export class Breadcrumbs {
  @Prop() icon: string = 'analytics';
  @Prop() icon_src: string;
  @Prop() icon_size: number = 0.85;

  @Prop() home: string = "/";
  @Prop() label: string = "Home";
  @Prop() description: string = "An icon that shows the main page you're on";

  @Prop() color: string = "blue5";

  render() {
    return (
      <div id="breadcumb_wrapper" class="breadcrumbs">
        <div class="flush-left"></div>
        <stellar-breadcrumb>
          <stellar-asset id="icon" name={this.icon} src={this.icon_src} color={this.color}></stellar-asset>
          <stellar-label>{this.label}</stellar-label>
        </stellar-breadcrumb>
        <slot></slot>
        <div class="flush"></div>
      </div>
    );
  }
}

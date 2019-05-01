import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'stellar-breadcrumbs',
  styleUrl: 'breadcrumbs.css',
  shadow: true
})

export class Breadcrumbs {
  @Element() el: HTMLElement;
  @Prop() icon: string = 'analytics';
  @Prop() icon_src: string;
  @Prop() icon_size: number = 0.85;

  @Prop() home: string = "/";
  @Prop() label: string = "Home";
  @Prop() description: string = "An icon that shows the main page you're on";

  @Prop() color: string = "blue5";

  componentWillLoad() {
    this.updateBreadcrumbs();
  }

  updateBreadcrumbs () {
    const last_breadcrumb: HTMLStellarBreadcrumbElement = this.el.querySelector('stellar-breadcrumb:last-of-type');
    const breadcrumbs: NodeListOf<HTMLStellarBreadcrumbElement> = this.el.querySelectorAll('stellar-breadcrumb');

    Array.from(breadcrumbs).forEach((breadcrumb) => {
      breadcrumb.last = false;
    });

    last_breadcrumb.last = true
  }

  render() {
    return (
      <div id="breadcumb_wrapper" class="breadcrumbs">
        <div class="flush-left"></div>
        <stellar-breadcrumb first>
          <stellar-asset id="icon" name={this.icon} src={this.icon_src} color={this.color}></stellar-asset>
          <stellar-label>{this.label}</stellar-label>
        </stellar-breadcrumb>
        <slot></slot>
        <div class="flush"></div>
      </div>
    );
  }
}

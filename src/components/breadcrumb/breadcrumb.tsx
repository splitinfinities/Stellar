import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-breadcrumb',
  styleUrl: 'breadcrumb.css'
})

export class Breadcrumb {
  @Prop() color: string;
  @Prop() href: string = "/";
  @Prop() target: string = "_self";
  @Prop() title: string;
  @Prop() disabled: boolean = false;

  render() {
    return (
      <a class="button" href={this.href} target={this.target} title={this.title} data-disabled={this.disabled}>
        <slot></slot>
      </a>
    );
  }
}

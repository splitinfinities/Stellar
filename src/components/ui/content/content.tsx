import { Component, Prop, State, Element, Listen, Watch } from '@stencil/core';
import { blurringEase } from '../../../global/helpers';

@Component({
  tag: 'stellar-content',
  styleUrl: 'content.css'
})

export class Content {
  @Element() element: HTMLElement;
  @State() parent: any;
  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false;
  @Prop({mutable: true, reflectToAttr: true}) for: string;
  @Prop({mutable: true, reflectToAttr: true}) name: string;

  @State() blur = 0;

  @Watch('open')
  onOpenChange() {
    if (this.open) {
      blurringEase((e: number) => {
        this.blur = e * 5
      }, 100, 0, 'linear')
    }
  }

  componentWillLoad() {
    if (this.open) {
      this.onOpenChange();
    }
  }

  @Listen('document:contentChange')
  handleActive (event: CustomEvent) {
    this.parent = event.detail.parent;

    this.parent.contents().forEach((element) => {
      element.open = element.name === event.detail.name;
    });
  }

  render() {
    return (
      <stellar-blur vertical={this.blur} class="wrap">
        <slot></slot>
      </stellar-blur>
    );
  }
}

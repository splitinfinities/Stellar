import { Component, Element, Prop, Method, State, h } from '@stencil/core';
import properties from 'css-custom-properties';
import delay from 'await-delay';

@Component({
  tag: 'stellar-reveal-list',
  styleUrl: 'reveal-list.css',
  shadow: true
})
export class RevealList {
  @Element() element: HTMLElement

  @Prop({ reflect: true }) animation: "fadeIn" | "fadeInUp" | "fadeInDown" = "fadeInUp";
  @Prop({ reflect: true }) outAnimation: "fadeOut" | "fadeOutUp" | "fadeOutDown" = "fadeOut";
  @Prop({ reflect: true }) delay: number = 100;
  @Prop({ reflect: true }) timing: number = 20;
  @Prop({ reflect: true, mutable: true }) active: boolean = false;

  @State() children;

  componentWillLoad() {
    this.children = Array.from(this.element.children);
  }

  async calculateTiming() {
    const time = 1000 + (this.children.length * this.delay);
    await delay(time);
  }

  @Method()
  async out() {
    properties.set({
      "--animation": this.outAnimation
    }, this.element);

    this.children.forEach((element, index) => {
      // @ts-ignore
      element.style.setProperty('animation-delay', `${this.delay * index}ms`)
      element.style.setProperty('animation-timing', `${this.timing}ms`)
    });

    return await this.calculateTiming()
  }

  @Method()
  async in() {
    this.active = true;

    properties.set({
      "--animation": this.animation
    }, this.element);

    this.children.forEach((element, index) => {
      // @ts-ignore
      element.style.setProperty('animation-delay', `${this.delay * index}ms`)
      element.style.setProperty('animation-timing', `${this.timing}ms`)
    });

    return await this.calculateTiming()
  }

  render() {
    return [
      <stellar-intersection element={this.element.parentElement} in={this.in.bind(this)} />,
      <slot />
    ]
  }
}

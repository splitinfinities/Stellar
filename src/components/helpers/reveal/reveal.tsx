import { Component, Element, Prop, Method, State } from '@stencil/core'
import properties from 'css-custom-properties';
import delay from 'await-delay';

@Component({
  tag: 'stellar-reveal',
  styleUrl: 'reveal.css',
  shadow: true
})
export class Scatter {
  @Element() element: HTMLElement

  @Prop({ reflectToAttr: true }) animation: "fadeIn"|"fadeInUp"|"fadeInDown" = "fadeInUp";
  @Prop({ reflectToAttr: true }) outAnimation: "fadeOut"|"fadeOutUp"|"fadeOutDown" = "fadeOut";
  @Prop({ reflectToAttr: true }) delay: number = 100;
  @Prop({ reflectToAttr: true }) timing: number = 50;
  @Prop({ reflectToAttr: true, mutable: true }) active: boolean = false;
  @State() io: IntersectionObserver;

  @State() children;

  componentWillLoad() {
    this.children = Array.from(this.element.children);
  }

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  addIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          setTimeout(() => {
            this.active = true;
            this.in();
          }, 350)
          this.removeIntersectionObserver();
        }
      })

      this.io.observe(this.element);
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => {
        this.in();
      }, 300);
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
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
    return (
      <slot />
    )
  }
}

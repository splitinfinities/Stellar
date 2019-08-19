import { Component, Prop, Element, h, Method, State, Host } from '@stencil/core'
import { animations } from "./animations";

@Component({
  tag: 'stellar-animate-text',
  styleUrl: 'animate-text.css'
})
export class AnimateText {
  @Element() element: HTMLElement;
  @State() letters: NodeListOf<HTMLElement>;
  @Prop() method: string = "lettering";
  @Prop() words: boolean = false;

  componentWillLoad() {
    if (this.words) {
      this.element.innerHTML = this.element.textContent.replace(/[^, ]+/g, "<span class='letter'>$&</span>");
      this.letters = this.element.querySelectorAll('.letter');
    } else {
      this.element.innerHTML = this.element.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
      this.letters = this.element.querySelectorAll('.letter');
    }
  }

  @Method()
  async in() {
    animations[this.method].in(this.letters)
  }

  @Method()
  async out() {
    animations[this.method].out(this.letters)
  }

  render() {
    return <Host>
      <slot />
      <stellar-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)} />
    </Host>
  }
}

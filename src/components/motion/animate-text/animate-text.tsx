import { Component, Prop, Element, h, Method, State, Host } from '@stencil/core'
import { animations } from "./animations";

@Component({
  tag: 'stellar-animate-text',
  styleUrl: 'animate-text.css'
})
export class AnimateText {
  @Element() element: HTMLElement;
  @State() letters: NodeListOf<HTMLElement>;
  @State() originalText: string;
  @Prop() method: string = "lettering";
  @Prop() words: boolean = false;

  componentWillLoad() {
    this.originalText = this.element.textContent;

    if (this.words) {
      this.element.innerHTML = this.element.textContent.replace(/[^, ]+/g, "<span class='letter' aria-hidden='true'>$&</span>");
      this.letters = this.element.querySelectorAll('.letter');
    } else {
      this.element.innerHTML = this.element.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter' aria-hidden='true'>$&</span>");
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
    return <Host role="text" ariaLabel={this.originalText}>
      <slot />
      <stellar-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)} />
    </Host>
  }
}

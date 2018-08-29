import { Component, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-comment',
  styleUrl: 'comment.css'
})

export class Comment {
  @Element() element: HTMLElement;

  @Prop({mutable: true}) content: any;
  @Prop({mutable: true}) name: any;
  @State() empty: boolean = false;

  componentWillLoad() {
    this.empty = this.element.querySelectorAll('stellar-comment').length === 0
  }

  componentDidLoad() {
    // @ts-ignore
    this.element.querySelector('stellar-avatar button.wrapper').tabIndex = -1;
    this.name = this.element.querySelector('stellar-avatar').name;
    this.content = this.element.querySelector('.content [slot="content"]').textContent;
  }

  render() {
    return (
      <div class={`comment ${this.empty ? "empty" : ""}`} aria-label={`Comment by ${this.name}: ${this.content}`} tabindex={0}>
        <div class="content" >
          <slot name="avatar" />
          <slot name="content" />
        </div>
        <div class={`thread`} aria-label={`In reply to  ${this.name} saying ${this.content}`}>
          <slot></slot>
        </div>
      </div>
    );
  }
}

import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'stellar-interview-line',
  styleUrl: 'interview-line.css'
})
export class InterviewLine {
  @Element() element: HTMLElement

  @Prop() in: number = 6000;
  @Prop() out: number = 8300;
  @Prop() complement: boolean = false;

  render () {
    return (
      <div class="line" data-start={this.in - 100} data-end={this.in} data-opacity-start="0" data-opacity-end="1" data-translatey-start="10" data-translatey-end="0">
        <div class="line" data-start={this.out - 100} data-end={this.out} data-opacity-start="1" data-opacity-end="0">
          <slot />
        </div>
      </div>
    )
  }
}

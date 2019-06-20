import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'stellar-reveal',
  styleUrl: 'reveal.css',
  shadow: false
})
export class Reveal {
  @Element() element: HTMLElement;

  /**
   * Direction the element moves when animating in
   */
  @Prop() direction: 'up' | 'down' | 'right' | 'left' = 'up';

  /**
   * How long to delay the animation (ms)
   */
  @Prop() delay: number = 0;

  /**
   * How long the animation runs (ms)
   */
  @Prop() duration: number = 500;

  /**
   * How far the element moves in the animation (% of element width/height)
   */
  @Prop() animationDistance: string = '30%';

  /**
   * How much of the element must be visible before it animates (% of element height)
   */
  @Prop() triggerDistance: string = '33%';

  componentDidLoad() {
    const animationDistance = this.direction === 'right' || this.direction === 'down' ? '-' + this.animationDistance : this.animationDistance;
    (this.element.querySelector('.reveal') as HTMLElement).style.setProperty('--distance', animationDistance);
  }

  in() {
    this.element.querySelector('.reveal').classList.add(`slide-${this.direction}`);
  }

  render() {
    return (
      <div
        class="reveal"
        style={{
          animationDuration: `${this.duration}ms`,
          animationDelay: `${this.delay}ms`
        }}
      >

        <slot/>
        <stellar-intersection element={this.element} multiple in={this.in.bind(this)} margin={this.triggerDistance} />
      </div>
    );
  }
}

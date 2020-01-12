import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'stellar-starscape',
  styleUrl: 'starscape.css'
})
export class Starscape {
  @Element() element: HTMLElement;

  render() {
    return (
      <stellar-parallax horizontal>
        <stellar-parallax-section speed={5}>
          <div class="stars" />
        </stellar-parallax-section>

        <stellar-parallax-section speed={-10}>
          <div class="stars" />
        </stellar-parallax-section>

        <stellar-parallax-section speed={-4}>
          <div class="stars" />
        </stellar-parallax-section>
      </stellar-parallax>
    )
  }
}

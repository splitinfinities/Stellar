import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'stellar-starscape',
  styleUrl: 'starscape.css'
})
export class Starscape {
  @Element() element: HTMLElement;

  render () {
    return (
      <stellar-parallax>
        <stellar-parallax-section layer={2} speed={-5}>
          <div class="stars" />
        </stellar-parallax-section>

        <stellar-parallax-section layer={1} speed={-3}>
          <div class="stars" />
        </stellar-parallax-section>
      </stellar-parallax>
    )
  }
}

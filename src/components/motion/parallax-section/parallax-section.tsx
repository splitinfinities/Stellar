import { Component, Prop, Element, h } from '@stencil/core';

@Component({
  tag: 'stellar-parallax-section',
  styleUrl: 'parallax-section.css'
})
export class ParallaxSection {
	@Element() element: HTMLElement;

	@Prop({reflect: true}) speed: number = 1;

	render () {
		return <slot />
	}
}

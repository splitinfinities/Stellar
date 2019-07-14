import { Component, Prop, Element, h } from '@stencil/core';

@Component({
  tag: 'stellar-parallax-section',
  styleUrl: 'parallax-section.css'
})
export class ParallaxSection {
	@Element() element: HTMLElement;

	@Prop() speed: number = 1
	@Prop() percentage: number = 0.5;
	@Prop() layer: number = 1

	componentWillLoad() {
		this.element.setAttribute("data-rellax-speed", this.speed.toString());

		if (this.percentage) {
			this.element.setAttribute("data-rellax-percentage", this.percentage.toString());
		}

		this.element.setAttribute("data-rellax-zindex", this.layer.toString());
	}

	render () {
		return <slot />
	}
}

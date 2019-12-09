import { Component, h, Prop, Element, State } from '@stencil/core';
import basicScroll from 'basicscroll'

@Component({
  tag: 'stellar-parallax',
  styleUrl: 'parallax.css'
})
export class Parallax {
	@Element() el: HTMLElement;
	@Prop() center: boolean = false;
	@Prop() horizontal: boolean = false;

	@State() easeBoxes = []

	componentWillLoad() {
		document.querySelectorAll('stellar-parallax-section').forEach((elem) => {
			this.easeBoxes.push(basicScroll.create({
			  elem,
			  from: 'top-bottom',
			  to: 'bottom-top',
			  direct: true,
			  props: {
				'--ty': {
				  from: `${-2 * elem.speed}%`,
				  to: `${2 * elem.speed}%`
				}
			  }
			}))
		});

		this.easeBoxes.forEach((instance) => {
			instance.start();
		});

		window.onresize = () => {
			this.easeBoxes.forEach((instance) => {
				instance.calculate()
				instance.update()
			})
		}
	}

	render () {
		return <slot />
	}
}

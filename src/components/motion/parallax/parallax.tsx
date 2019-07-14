import { Component, State, Method, h, Prop, Element } from '@stencil/core';
import Rellax from 'rellax';

@Component({
  tag: 'stellar-parallax',
  styleUrl: 'parallax.css'
})
export class Parallax {
	@Element() el: HTMLElement;
	@Prop() horizontal: boolean = false;
	@Prop() center: boolean = false;

	@State() relax;

	componentWillLoad() {
		this.relax = new Rellax('stellar-parallax-section', {
			center: this.center,
			horizontal: this.horizontal
		});
	}

	componentDidLoad() {
		this.reload()
	}

	@Method()
	async reload() {
		this.relax.refresh()
	}

	render () {
		return <slot />
	}
}

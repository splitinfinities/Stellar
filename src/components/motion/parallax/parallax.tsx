import { Component, State, Method, h } from '@stencil/core';
import Rellax from 'rellax';

@Component({
  tag: 'stellar-parallax',
  styleUrl: 'parallax.css'
})
export class Parallax {
	@State() relax;

	componentWillLoad() {
		this.relax = new Rellax('stellar-parallax-section', {
			center: true
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
		return (<slot></slot>)
	}
}

import { Component, Element, Prop, h } from '@stencil/core';
import properties from 'css-custom-properties'

@Component({
	tag: 'skeleton-text',
	styleUrl: 'skeleton-text.css'
})
export class SkeletonText {
	@Element() element: HTMLElement;

	@Prop({reflect: true}) as: string|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p' = 'p';
	@Prop({reflect: true}) width: number = 100;
	@Prop({reflect: true}) loading: boolean = false;

	componentWillLoad() {
		properties.set({
			'--width': `${this.width}%`
		}, this.element)
	}

	in () { this.element.classList.add('visible') }
	out () { this.element.classList.remove('visible') }

	render() {
		return <span>&nbsp;<stellar-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)} /></span>;
	}
}

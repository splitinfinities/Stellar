import { Component, Element, State, Prop } from '@stencil/core';
import properties from 'css-custom-properties'

@Component({
	tag: 'skeleton-text',
	styleUrl: 'skeleton-text.css'
})
export class SkeletonText {
	@Element() element: HTMLElement;

	@Prop({reflectToAttr: true}) as: string|'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p' = 'p';
	@Prop() width: number = 100;
	@Prop({reflectToAttr: true}) loading: boolean = false;

	@State() observer: IntersectionObserver;

	componentWillLoad() {
		properties.set({
			'--width': `${this.width}%`
		}, this.element)

		this.observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					this.element.classList.add('visible')
				} else {
					this.element.classList.remove('visible')
				}
			});
		});

		this.observer.observe(this.element);
	}

	render() {
		return <span>&nbsp;</span>;
	}
}

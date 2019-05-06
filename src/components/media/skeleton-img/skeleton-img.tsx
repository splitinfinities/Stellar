import { Component, Element, Prop, State} from '@stencil/core';
import properties from 'css-custom-properties'

@Component({
	tag: 'skeleton-img',
	styleUrl: 'skeleton-img.css'
})
export class SkeletonImg {
	@Element() element: HTMLElement;

	@Prop({reflectToAttr: true}) width: number = 600;
	@Prop({reflectToAttr: true}) height: number = 300;
	@Prop({reflectToAttr: true}) block: boolean = false;
	@Prop({reflectToAttr: true}) loading: boolean = false;
	@Prop({reflectToAttr: true}) icon: boolean = false;

	@State() observer: IntersectionObserver;

	componentWillLoad() {
		if (this.block) {
		} else {
			properties.set({
				'--width': `${this.width}px`,
				'--height': `${this.height}px`
			}, this.element)
		}

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
		return [
			this.loading && this.icon && <stellar-asset name="spinning-bubbles" color="gray25"></stellar-asset>,
			<svg width={this.width} height={this.height}>
				<rect width={this.width} height={this.height} />
			</svg>
		];
	}
}

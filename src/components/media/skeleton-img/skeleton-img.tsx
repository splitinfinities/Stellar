import { Component, Element, Prop, h } from '@stencil/core';
import properties from 'css-custom-properties'

@Component({
	tag: 'skeleton-img',
	styleUrl: 'skeleton-img.css'
})
export class SkeletonImg {
	@Element() element: HTMLElement;

	@Prop({ reflect: true }) width: number = 600;
	@Prop({ reflect: true }) height: number = 300;
	@Prop({ reflect: true }) block: boolean = false;
	@Prop({ reflect: true }) loading: boolean = false;
	@Prop({ reflect: true }) icon: boolean = false;

	componentWillLoad() {
		if (!this.block) {
			properties.set({
				'--width': `${this.width}px`,
				'--height': `${this.height}px`
			}, this.element)
		}
	}

	in() {
		this.element.classList.add('visible')
	}

	out() {
		this.element.classList.remove('visible')
	}

	render() {
		return [
			this.loading && this.icon && <stellar-asset name="spinning-bubbles" color="gray25"></stellar-asset>,
			<svg width={this.width} height={this.height}>
				<rect width={this.width} height={this.height} />
			</svg>,
			<stellar-intersection element={this.element} multiple in={this.in.bind(this)} out={this.out.bind(this)} />
		];
	}
}

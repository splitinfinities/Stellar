import { Component, Prop, Element, Method, h } from '@stencil/core';
import { default as eqjs } from 'eq.js';

@Component({
	tag: 'stellar-layout',
	styleUrl: 'layout.css',
  shadow: true
})
export class Layout {
	@Element() element: HTMLElement;

	@Prop({reflect: true}) type: string;
	@Prop({reflect: true}) size: "tiny"|"small"|"medium"|"large"|"xlarge"|"full"|"flush" = "medium";
	@Prop({reflect: true}) padding: "none"|"tiny"|"small"|"medium"|"large" = "medium";
	@Prop({reflect: true}) align: "baseline"|"center"|"top"|"bottom" = "baseline";
	@Prop({reflect: true}) content: "baseline"|"center"|"top"|"bottom" = "baseline";
	@Prop({reflect: true}) height: "fill";

	@Prop({reflect: true}) hasNav: boolean;

	componentWillLoad() {
		const navs = Array.from(this.element.querySelectorAll('*[slot="nav"]'));
		this.hasNav = navs.length > 0;

		eqjs.definePts(this.element, {
			"tiny": 320,
			"small": 480,
			"medium": 640,
			"large": 800,
			"massive": 1024,
		});

		this.refresh();
	}

	componentDidLoad() {
		this.refresh();
	}

	@Method()
	async refresh() {
		var resizeEvent = window.document.createEvent('UIEvents');
		resizeEvent.initEvent('resize', true, false);
		window.dispatchEvent(resizeEvent);
	}

	render() {
		return (
			<div class="layout">
				<slot></slot>
				<slot name="nav"></slot>
			</div>
		);
	}
}

import { Component, Prop, Element, Method, h } from '@stencil/core';
import { default as eqjs } from 'eq.js';

@Component({
	tag: 'stellar-layout',
	styleUrl: 'layout.css',
  shadow: true
})
export class Layout {
	@Element() element: HTMLElement;

	@Prop({reflectToAttr: true}) type: string;
	@Prop({reflectToAttr: true}) size: "tiny"|"small"|"medium"|"large"|"xlarge"|"full"|"flush" = "medium";
	@Prop({reflectToAttr: true}) padding: "none"|"tiny"|"small"|"medium"|"large" = "medium";
	@Prop({reflectToAttr: true}) align: "baseline"|"center"|"top"|"bottom" = "baseline";
	@Prop({reflectToAttr: true}) content: "baseline"|"center"|"top"|"bottom" = "baseline";
	@Prop({reflectToAttr: true}) height: "fill";

	@Prop({reflectToAttr: true}) hasNav: boolean;

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
		resizeEvent.initUIEvent('resize', true, false, window, 0);
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

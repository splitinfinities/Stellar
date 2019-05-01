import { Component, Prop, Element, Method } from '@stencil/core';
import { default as eqjs } from 'eq.js';

@Component({
	tag: 'stellar-layout',
	styleUrl: 'layout.css',
  shadow: true
})
export class Layout {
	@Element() element: HTMLElement;

	@Prop({reflectToAttr: true}) type: string;
	@Prop({reflectToAttr: true}) size: "tiny"|"small"|"medium"|"large"|"full"|"flush" = "medium";
	@Prop({reflectToAttr: true}) padding: "none"|"tiny"|"small"|"medium"|"large" = "medium";
	@Prop({reflectToAttr: true}) align: "baseline"|"center"|"top"|"bottom" = "top";

	componentWillLoad() {
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
	refresh() {
		var resizeEvent = window.document.createEvent('UIEvents');
		resizeEvent.initUIEvent('resize', true, false, window, 0);
		window.dispatchEvent(resizeEvent);
	}

	render() {
		return (
			<div class="layout">
				<slot></slot>
			</div>
		);
	}
}

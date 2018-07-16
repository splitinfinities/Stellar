import { Component, Prop, Element, Method } from '@stencil/core';
import { default as eqjs } from 'eq.js';

@Component({
	tag: 'stellar-grid',
	styleUrl: 'grid.css'
})
export class Grid {
	@Element() element: HTMLElement;

	@Prop({reflectToAttr: true}) cols: number|string = "auto";
	@Prop({reflectToAttr: true}) compact: boolean = false;
	@Prop({reflectToAttr: true}) padding: boolean = false;
	@Prop({reflectToAttr: true}) align: string = "start";
	@Prop({reflectToAttr: true}) responsive: boolean = true;

	makeResponsive() {
		if (this.responsive) {
			eqjs.definePts(this.element, {
				"tiny": 320,
				"small": 480,
				"medium": 640,
				"large": 800,
				"massive": 1024
			});

			this.refresh();
		}
	}

	componentWillLoad() {
		this.makeResponsive()
	}

	componentDidLoad() {
		this.makeResponsive()
	}

	@Method()
	refresh() {
		var resizeEvent = window.document.createEvent('UIEvents');
		resizeEvent.initUIEvent('resize', true, false, window, 0);
		window.dispatchEvent(resizeEvent);
	}

	render() {
		return (
			<div class="grid">
				<slot></slot>
			</div>
		);
	}
}

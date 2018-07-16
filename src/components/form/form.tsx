import { Component, Prop, Element, Method } from '@stencil/core';

@Component({
	tag: 'stellar-form',
	styleUrl: 'form.css'
})
export class Form {
	@Element() element: HTMLElement;

  @Prop() action: string;
  @Prop() method: string = "get";
  @Prop() acceptCharset: string;
  @Prop() autocomplete: string = "on";
  @Prop() enctype: string = "text/plain";
  @Prop() name: string;
  @Prop() novalidate: boolean = false;
  @Prop() target: string;

	@Method()
	refresh() {
		var resizeEvent = window.document.createEvent('UIEvents');
		resizeEvent.initUIEvent('resize', true, false, window, 0);
		window.dispatchEvent(resizeEvent);
	}

	render() {
		return (
			<form action={this.action} method={this.method} accept-charset={this.acceptCharset} autocomplete={this.autocomplete} enctype={this.enctype} name={this.name} novalidate={this.novalidate} target={this.target} onSubmit={(e) => { console.log(e); }}>
				<slot></slot>
			</form>
		);
	}
}

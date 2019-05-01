import { Component, State } from '@stencil/core';

@Component({
	tag: 'stellar-comments',
	styleUrl: 'comments.css',
	shadow: true
})
export class Comments {
	@State() comments: any;

	render() {
		return (
			<section>
				<slot></slot>
			</section>
		);
	}
}

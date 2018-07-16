import { Component, State } from '@stencil/core';

@Component({
	tag: 'stellar-comments',
	styleUrl: 'comments.css'
})
export class Comments {
	@State() comments: any;

	renderComments () {
		return this.comments.map(comment => {
			return (
				<single-comment content={comment.content.rendered} />
			)
		})
	}

	render() {
		return (
			<section>
				{this.comments && this.renderComments()}
				<slot></slot>
			</section>
		);
	}
}

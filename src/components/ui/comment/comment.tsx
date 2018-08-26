import { Component, Element, State, Prop } from '@stencil/core';

@Component({
	tag: 'stellar-comment',
	styleUrl: 'comment.css'
})

export class Comment {
	@Element() element: HTMLElement;

	@Prop() content: string;
	@State() empty: boolean = false;

	componentWillLoad() {
		this.empty = this.element.querySelectorAll('stellar-comment').length === 0
	}

	render() {
		return (
			<div class={`comment ${this.empty ? "empty" : ""}`}>
				<div class="content">
					<slot name="avatar" />
					<slot name="content" />
				</div>
				<div class={`thread`}>
					<slot></slot>
				</div>
			</div>
		);
	}
}

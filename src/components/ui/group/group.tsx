import { Component, Prop, State, Element } from '@stencil/core'

@Component({
	tag: 'stellar-group',
	styleUrl: 'group.css',
	shadow: true
})
export class Group {
	@Element() element: HTMLElement
	@Prop({mutable: true}) size: string = "medium"
	@Prop() overflow: boolean = false
	@Prop() count: number = 10
	@State() extras: Array<Element> = []

	componentWillLoad() {
		if (this.overflow) {
			if (this.element.children.length > this.count) {
				const children = Array.from(this.element.children)
				children.forEach((element: HTMLStellarAvatarElement, index) => {
					if ((index + 1) > this.count) {
						this.size = element.size
						this.extras.push(element)
						this.element.removeChild(element)
					}
				})
			}
		}
	}

	resultantExtras() {
		return this.extras.map((element) => {
			const attributes = {};
			Array.prototype.slice.call(element.attributes).forEach(function(item) {
				attributes[item.name] = item.value
			})
			return <element.tagName {...attributes} />
		})
	}

	render() {
		return [
			<slot />,
			this.overflow && <stellar-group-overflow size={this.size} count={this.extras.length}>{this.resultantExtras()}</stellar-group-overflow>
		]
	}
}

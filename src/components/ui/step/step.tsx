import { Component, Prop, State, Element, Event, EventEmitter } from '@stencil/core'
import parentNodeSelector from 'parent-node-selector'

@Component({
  tag: 'stellar-step',
  styleUrl: 'step.css',
})

export class Step {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflectToAttr: true}) href: string = "#"
  @Prop() disabled: boolean = false
  @Prop({mutable: true, reflectToAttr: true}) open: boolean = false

  @State() parent: any

  @Event() contentChange: EventEmitter;

  componentWillLoad () {
    this.parent = parentNodeSelector(this.element, 'stellar-steps')
  }

  handleClick() {
    this.parent.steps().forEach((element) => {
      element.open = false
    })

    this.open = true

    this.contentChange.emit({
      parent: this.parent,
      name: this.href.replace(/[#]/g, "")
    });
  }

  renderTitle() {
    return (
      <span class="title">
        <slot></slot>
      </span>
    )
  }

  render() {
    return (
      <stellar-button block href={this.href} tabindex="0" class="step-button" onClick={() => this.handleClick()}>
        {this.renderTitle()}
      </stellar-button>
    )
  }
}

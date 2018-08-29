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

  @Prop({reflectToAttr: true}) order: number
  @Prop({reflectToAttr: true}) tabCount: number

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
      <button role="tab" aria-selected={this.open ? "true" : "false" } aria-setsize={this.tabCount} aria-posinset={this.order} tabindex="0" class="step-button" onClick={() => this.handleClick()}>
        <stellar-label>{this.renderTitle()}</stellar-label>
      </button>
    )
  }
}

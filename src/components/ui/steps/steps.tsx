import { Component, Prop, State, Element, Method } from '@stencil/core'

@Component({
  tag: 'stellar-steps',
  styleUrl: 'steps.css'
})

export class Steps {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflectToAttr: true}) name: string

  @State() stepsList: NodeListOf<any>
  @State() contentsList: NodeListOf<any>

  @Method()
  steps() {
    if (this.stepsList.length === 0) {
      this.stepsList = this.element.querySelectorAll('stellar-step')
    }

    return this.stepsList
  }

  @Method()
  contents() {
    this.contentsList = document.querySelectorAll(`stellar-content[for='${this.name}']`);
    return this.contentsList;
  }

  componentWillLoad () {
    this.stepsList = this.element.querySelectorAll('stellar-step')
  }

  render() {
    return (
      <div class="step-list">
        <slot></slot>
      </div>
    )
  }
}

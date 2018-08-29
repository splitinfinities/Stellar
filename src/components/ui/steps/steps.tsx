import { Component, Prop, State, Element, Method } from '@stencil/core'

@Component({
  tag: 'stellar-steps',
  styleUrl: 'steps.css'
})

export class Steps {
  @Element() element: HTMLElement

  @Prop({mutable: true, reflectToAttr: true}) name: string

  @State() stepsList: Array<HTMLStellarStepElement>
  @State() contentsList: Array<HTMLStellarContentElement>

  @Method()
  steps() {
    if (!this.stepsList || this.stepsList.length === 0) {
      this.stepsList = Array.from(this.element.querySelectorAll('stellar-step'))
    }

    return this.stepsList
  }

  @Method()
  contents() {
    this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
    return this.contentsList;
  }

  componentWillLoad () {
    this.steps()

    const stepCount = this.steps().length;

    this.steps().forEach((step, index) => {
      step.order = index + 1;
      step.tabCount = stepCount;
    })
  }

  render() {
    return (
      <div class="step-list" role="tablist">
        <slot></slot>
      </div>
    )
  }
}

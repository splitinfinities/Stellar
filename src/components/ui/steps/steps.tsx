import { Component, Prop, State, Element, Method, h } from '@stencil/core'

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
  async steps() {
    if (!this.stepsList || this.stepsList.length === 0) {
      this.stepsList = Array.from(this.element.querySelectorAll('stellar-step'))
    }

    return this.stepsList
  }

  @Method()
  async contents() {
    this.contentsList = Array.from(document.querySelectorAll(`stellar-content[for='${this.name}']`));
    return this.contentsList;
  }

  async componentWillLoad () {
    const steps = await this.steps()

    const stepCount = steps.length;

    steps.forEach((step, index) => {
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

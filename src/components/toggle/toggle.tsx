import { Component, Prop, State, Element, Listen } from "@stencil/core";

@Component({
  tag: "stellar-toggle",
  styleUrl: "toggle.css"
})
export class Toggle {
  @Element() element: HTMLElement;
  @State() form: HTMLElement;

  @Prop({mutable: true}) type: string|"checkbox"|"radio"|"radio-block"|"checkbox-block" = "checkbox";
  @Prop({mutable: true}) name: string = "";
  @Prop({reflectToAttr: true}) stacked: boolean = false;
  @Prop() flip: boolean = false;
  @Prop() required: boolean;
  @Prop() single: boolean;
  @Prop() size: string;

  @Prop() card: string = "div";

  @Prop() label: string;

  @Prop({mutable: true, reflectToAttr: true}) value: string;
  @State() valid: boolean;
  @State() error: string;

  componentWillLoad () {
    const options = this.element.querySelectorAll('stellar-toggle-option');

    // @ts-ignore
    options.forEach((option) => {
      option.type = this.type;
      option.for = this.name;
    })
  }

  @Listen('toggleChanged')
  toggleChangedHandler(event: CustomEvent) {
    const options = this.element.querySelectorAll('stellar-toggle-option');

    // @ts-ignore
    options.forEach((option) => {
      if (option !== event.detail.element) {
        option.updateSelected(false);
      } else {
        this.value = event.detail.value
      }
    })
  }

  updateChecked () {
    const options = this.element.querySelectorAll('stellar-toggle-option');

    // @ts-ignore
    options.forEach((option) => {
      option.type = this.type;
      option.for = this.name;
    })
  }

  renderValidation () {
    if (this.error) {
      return (<p class="validation">{this.error}</p>)
    }
  }

  renderBlock() {
    return (
      <div>
        { this.renderValidation() }
        <this.card padding="tiny">
          <stellar-grid cols={this.stacked ? "1" : "auto"} compact={true}>
            <slot></slot>
          </stellar-grid>
        </this.card>
      </div>
    )
  }

  renderPlain() {
    return [
      <slot></slot>,
      this.renderValidation()
    ]
  }

  render() {
    return [
    this.label && <label><p class="label">{this.label}</p></label>,
    <div data-type={this.type}>
      { ["radio", "checkbox"].indexOf(this.type) === -1 && this.renderBlock() }
      { ["radio", "checkbox"].indexOf(this.type) !== -1 && this.renderPlain() }
    </div>
    ];
  }
}

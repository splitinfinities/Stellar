import { Component, Prop, State, Element, Listen, Method, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "stellar-toggle",
  styleUrl: "toggle.css"
})
export class Toggle {
  @Element() element: HTMLElement;
  @State() form: HTMLElement;

  @Prop({mutable: true}) type: string|"checkbox"|"radio"|"radio-block"|"checkbox-block" = "checkbox";
  @Prop({mutable: true, reflectToAttr: true}) name: string = "";
  @Prop({mutable: true}) description: string;
  @Prop({reflectToAttr: true}) stacked: boolean = false;
  @Prop() flip: boolean = false;
  @Prop() required: boolean;
  @Prop() single: boolean;
  @Prop() size: string;
  @Prop({reflectToAttr: true}) novalidate: boolean;

  @Prop() card: any = "div";

  @Prop() label: string;

  @Prop({mutable: true}) value: string|string[];
  @State() valid: boolean = true;
  @State() error: string;
  @State() status: any;

  @Event() change: EventEmitter;

  componentWillLoad () {
    const options = this.element.querySelectorAll('stellar-toggle-option');

    const values = [];

    // @ts-ignore
    options.forEach((option) => {
      option.type = this.type;
      option.for = this.name;

      if (option.checked) {
        values.push(option.value)
      }
    })

    this.value = values;
  }

  @Method()
  async validate(): Promise<FormResult> {
    this.status = {
      name: this.name,
      value: this.value,
      valid: this.valid,
      errors: [],
    };

    return this.status;
  }

  @Listen('change')
  toggleChangedHandler(event: CustomEvent) {
    if (event.detail && event.detail.element) {
      const options = Array.from(this.element.querySelectorAll('stellar-toggle-option'));
      options.filter(el => el !== event.detail.element).forEach((option: HTMLStellarToggleOptionElement) => {
        option.confirm();
      });
      const values = [];

      this.value = [];

      if (this.type === "checkbox" || this.type === "checkbox-block" ) {
        // @ts-ignore
        options.forEach((option) => {
          if (option === event.detail.element && event.detail.element.checked) {
            values.push(event.detail.value)
          }
        });
      } else if (this.type === "radio" || this.type === "radio-block") {
        if (event.detail.element.checked) {
          values.push(event.detail.value)
        } else {

        }
      }

      this.value = values;

      this.change.emit(this.value)
    }
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
      this.label && <stellar-label>{this.label}</stellar-label>,
      <div data-type={this.type} onClick={e => { e.stopPropagation(); }}>
        { ["radio", "checkbox"].indexOf(this.type) === -1 && this.renderBlock() }
        { ["radio", "checkbox"].indexOf(this.type) !== -1 && this.renderPlain() }
      </div>,
      this.description && <stellar-label size="small" underneath>{this.description}</stellar-label>
    ];
  }
}

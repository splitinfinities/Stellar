import { Component, Prop, State, Element, Method, Listen } from '@stencil/core';

@Component({
  tag: 'stellar-form',
  styleUrl: 'form.css'
})
export class Form {
  @Element() element: HTMLElement;

  @Prop() ajax: boolean = false;

  @Prop() action: string;
  @Prop() method: string = "get";
  @Prop() acceptCharset: string;
  @Prop() autocomplete: string = "on";
  @Prop() enctype: string = "application/x-www-form-urlencoded";
  @Prop() name: string;
  @Prop() novalidate: boolean = false;
  @Prop() target: string;

  @State() valid: boolean = true;
  @State() results: Array<any> = [];

  @Listen('keydown.enter')
  handleEnter() {
    this.submit()
  }

  @Method()
  refresh() {
    var resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
  }

  @Method()
  submit() {
    this.valid = true;
    this.results = [];

    const els = Array.from(this.element.querySelectorAll('stellar-input, stellar-toggle, stellar-range, stellar-switch, stellar-select'));

    els.forEach((element: HTMLStellarInputElement|HTMLStellarSelectElement) => {
      const result = element.validate()
      this.results = [...this.results, result];

      if (!result.valid) {
        this.valid = false;
      }
    })

    if (this.valid) {
      this.element.querySelector('form').submit();
    }
  }

  render() {
    return (
      <form action={this.action} method={this.method} accept-charset={this.acceptCharset} autocomplete={this.autocomplete} enctype={this.enctype} name={this.name} novalidate={this.novalidate} target={this.target} onSubmit={(e) => { e.preventDefault(); this.submit(); }}>
        <slot />
      </form>
    );
  }
}

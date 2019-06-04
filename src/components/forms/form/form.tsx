import { Component, Prop, State, Element, Method, Listen, Event, EventEmitter, h } from '@stencil/core';
import { asyncForEach, form2js } from '../../../utils';

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
  @Prop() enctype: string = "multipart/form-data";
  @Prop() name: string;
  @Prop() novalidate: boolean = false;
  @Prop() target: string;

  @State() selectors: Array<string> = ['stellar-input', 'stellar-toggle', 'stellar-range', 'stellar-switch', 'stellar-select'];

  @Event() submit: EventEmitter;

  @Listen('keydown')
  handleEnter(event) {
    if (event.key === 'enter') {
      this.submit_form();
    }
  }

  @Method()
  async register(selectors: string[]) {
    this.selectors = [
      ...this.selectors,
      ...selectors
    ]
  }

  @Method()
  async refresh() {
    var resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
  }

  @Method()
  async state(): Promise<{els: any, json: any, results: FormResult[], formData: any, valid: boolean}> {
    var formData = new FormData();
    var results = [];
    var valid = true;

    const els = Array.from(this.element.querySelectorAll(this.selectors.join(",")));

    console.log(els)

    await asyncForEach(els, async (element: HTMLStellarInputElement|HTMLStellarSelectElement) => {
      try {
        let result = await element.validate();
        results.push(result);
      } catch(e) {
        results.push({
          name: `${element.name}`,
          value: undefined,
          valid: false,
          errors: [e.message],
        })
      }
    })

    results.forEach((result) => {
      if (result) {
        if (result.name) {
          formData.append(result.name.toString(), result.value)
        }

        if (!result.valid) {
          valid = false;
        }
      }
    })

    const json = form2js(results.filter(i => i && i.name));

    return {
      els,
      json,
      results: results,
      formData: formData,
      valid: valid,
    }
  }

  @Method()
  async submit_form() {
    const state = await this.state()

    console.log(state.json)

    if (state.valid) {
      if (this.ajax) {
        this.submit.emit(state)
      } else {
        this.element.querySelector('form').submit();
      }
    }
  }

  render() {
    return (
      <form action={this.action} method={this.method} accept-charset={this.acceptCharset} autocomplete={this.autocomplete} enctype={this.enctype} name={this.name} novalidate={this.novalidate} target={this.target} onSubmit={(e) => { e.preventDefault(); this.submit_form(); }}>
        <slot />
      </form>
    );
  }
}

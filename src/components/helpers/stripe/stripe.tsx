import { Component, Prop, State, Element, Method, h } from '@stencil/core';
import * as config from './config'

@Component({
  tag: 'stellar-stripe',
  styleUrl: 'stripe.css'
})
export class Card {
  @Element() element: HTMLElement;
  @State() input: HTMLInputElement;

  @Prop() token: string = 'pk_test_6pRNASCoBOKtIshFeQd4XMUh';
  @Prop() name: string = 'stripe';

  @State() stripe: any;
  @State() error: string;
  @State() card: any;
  @State() value: any = undefined;
  @State() cardData: any = {};
  @State() state: "submitting"|"processing"|"submitted"|"preparing" = "preparing";

  componentWillLoad () {
    this.stripe = window["Stripe"](this.token);
  }

  componentDidLoad () {
    this.connect();
  }

  @Method()
  async connect() {
    this.stripe = window["Stripe"](this.token);
    this.input = this.element.querySelector('.token');
    this.attachToForm();
    this.prepareStripe();
  }

  @Method()
  async getToken() {
    await this.stripe.createToken(this.card, this.cardData)
        .then(this.handleResponse.bind(this))
        .catch(this.handleError.bind(this));

    return this.value !== undefined;
  }

  attachToForm() {
    const form = this.element.closest("form");

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.getToken().then((result) => {
          if (result) {
            form.submit();
          }
        });
      })
    } else {
      console.error("The stellar-stripe tag must be added to a form.");
    }
  }

  handleResponse({error, token}) {
    if (error) {
      this.setError(error.message);
      // this.dispatchEvent(new ErrorEvent('stripe-error', {error, bubbles, composed}));
    } else {
      this.error = undefined;
      this.value = token.id;
      // this.dispatchEvent(new CustomEvent('stripe-token', {token, bubbles, composed}));
    }
  }

  handleError(error) {
    // this.dispatchEvent(new ErrorEvent('stripe-error', {error, bubbles, composed}));
    // Show error in UI
    this.setError(error.message);
  }

  @Method()
  async setError(error: string) {
    this.error = error;
  }

  prepareStripe () {
    var elements = this.stripe.elements({
      fonts: [
        {
          cssSrc: 'https://fonts.googleapis.com/css?family=Open+Sans',
        },
      ],
      locale: 'auto'
    });

    this.card = elements.create('card', {
      style: config.style,
      classes: config.classes,
      hidePostalCode: true,
    });

    this.card.mount(this.element.querySelector('#card'));
  }

  renderPhone () {
    return (
      <stellar-input id="phone" data-tid="stellar_stripe.form.phone" type="tel" placeholder="(941) 555-0123" required label="Phone number" />
    );
  }

  renderZip () {
    return (
      <stellar-input id="zip" data-tid="stellar_stripe.form.postal_code" type="text" placeholder="94107" required label="ZIP" />
    );
  }

  render() {
    return (
      <div>
        <input type="hidden" class="token" name={this.name} value={this.value} />
        <div class="field">
          <label data-for="stellar_stripe.form.card"><p class="label">Card details</p></label>
          <div data-tid="stellar_stripe.form.card" id="card" class="input"></div>
          {this.error && <p class="validation"><span>{this.error}</span></p>}
        </div>
        <stellar-grid>
          { this.renderPhone() }
          { this.renderZip() }
        </stellar-grid>
      </div>
    )
  }
}

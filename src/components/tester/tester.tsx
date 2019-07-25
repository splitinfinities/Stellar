import { Component, State, h, Element } from '@stencil/core'

@Component({
    tag: 'stellar-tester',
})
export class Testington {
    @Element() element: HTMLElement;
    @State() form: HTMLStellarFormElement;

    componentDidLoad() {
        this.form = this.element.querySelector('stellar-form')
    }

    submitLogin (_) {
        alert('submitted');
    }

    render() {
        return <stellar-layout size="tiny" padding="large" align="center" class="mv6 dib w-100">
        <copy-wrap align="center">
          <h1 class="mb4">Sign in to Your Account</h1>

          <stellar-form ajax onSubmitted={(e) => { this.submitLogin(e) }}>
            <stellar-grid cols="1" noresponsive>
              <stellar-input name="email" type="email" placeholder="Email">
                <stellar-asset name="mail" slot="icon" />
              </stellar-input>

              <stellar-input name="password" type="password" placeholder="Password" class="mb4" novalidate>
                <stellar-asset name="lock" slot="icon" />
              </stellar-input>

              <stellar-button tag="button" pill class="center" onClick={(e) => { e.preventDefault(); this.form.submit_form(); }}>Sign In</stellar-button>
            </stellar-grid>
          </stellar-form>
        </copy-wrap>
      </stellar-layout>
    }
}

import { Component, State, h, Element } from '@stencil/core'

@Component({
    tag: 'stellar-tester',
})
export class Testington {
    @Element() element: HTMLElement;
    @State() form: HTMLStellarFormElement;
    @State() select: HTMLStellarSelectElement;

    componentDidLoad() {
        this.form = this.element.querySelector('stellar-form')
        this.select = this.form.querySelector('stellar-select')
    }

    submitLogin (_) {
        this.select.multiple = !this.select.multiple
    }

    render() {
        return <stellar-layout size="tiny" padding="large" align="center" class="mv6 dib w-100">
            <stellar-theme body system base="orange" complement="violet" />
        <copy-wrap align="center">
          <h1 class="mb4">Sign in to Your Account</h1>

          <stellar-form ajax onSubmitted={(e) => { this.submitLogin(e) }}>
            <stellar-grid cols="1" noresponsive>
            <stellar-select
                name={"config[query][metric_category]"}
                overlay
                fit
                wrap
                autoSelectFirst
                label="Metric Category"
                placeholder="Select a metric category"
                novalidate
                tooltip="Select a metric category to view the related card type and metric options.">
                  <stellar-item
                      fit
                      wrap
                      selected
                      value={"Nice"}>
                          Nice
                  </stellar-item>
                  <stellar-item
                      fit
                      wrap
                      value={"Awesome"}>
                          Awesome
                  </stellar-item>
                  <stellar-item
                      fit
                      wrap
                      value={"Sick"}>
                          Sick
                  </stellar-item>
                  <stellar-item
                      fit
                      wrap
                      value={"Cool"}>
                          Cool
                  </stellar-item>
              </stellar-select>
              <stellar-button tag="submit">submit</stellar-button>
            </stellar-grid>
          </stellar-form>
        </copy-wrap>
      </stellar-layout>
    }
}

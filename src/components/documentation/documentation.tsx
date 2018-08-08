import { Component, Prop, State, Method, Element } from '@stencil/core';

@Component({
  tag: 'stellar-documentation',
  styleUrl: 'documentation.css'
})
export class Documentation {
  @Element() element: HTMLElement;

  @Prop() type: string = "html";
  @Prop() preview: boolean = true;
  @Prop() feature: string;
  @Prop() property: string;

  @Prop() codeString: string;

  @State() code: HTMLStellarCodeBlockElement;
  @State() result: string;

  @State() templates: any;
  @State() randomName: number = Math.round((Math.random() * 1000));

  @State() observer: MutationObserver;

  componentWillLoad () {
    var callback = (mutationsList) => {
      for (var mutation of mutationsList) {
        if (mutation.type == 'childList') {
          this.reload()
        }
      }
    };

    this.observer = new MutationObserver(callback);
    this.grabTemplates()
  }

  attachObserver() {
    // Start observing the target node for configured mutations
    this.observer.observe(this.element, { childList: true, subtree: true });
  }

  componentDidLoad () {
    this.code = this.element.querySelector('stellar-code-block');

    if (this.code) {
      this.result = this.code.result();
    }

    this.attachObserver();
  }

  grabTemplates() {
    const templates = [].slice.call(this.element.querySelectorAll('template'));

    if (templates.length > 1) {
      this.templates = templates;
    }
  }

  @Method()
  reload() {
    this.grabTemplates();
    this.code = this.element.querySelector('stellar-code-block');

    if (this.code) {
      this.result = this.code.result();
    }
  }

  renderPreview() {
    // @ts-ignore
    return (<section flush class="preview">
        <div class="result" innerHTML={ this.result } />
      </section>)
  }

  renderDocumentation () {
    // @ts-ignore
    return (<section flush class="documentation">
      <stellar-code-block language={this.type} codeString={this.codeString}>
        <slot></slot>
      </stellar-code-block>
    </section>)
  }

  render() {
    return (
      <stellar-card shadow="light" padding="none">
        { this.feature && <header><h3>{ this.feature }</h3><h6>{ this.property }</h6></header> }
        { this.preview && this.renderPreview() }
        { this.renderDocumentation() }
      </stellar-card>
    )
  }
}

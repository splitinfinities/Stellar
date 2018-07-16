import { Component, Prop, State, Method, Element } from '@stencil/core';

@Component({
  tag: 'stellar-code-block',
  styleUrl: 'code-block.css'
})
export class CodeBlock {
  @Element() element: HTMLElement;
  @Prop({ reflectToAttr: true }) language: string = "html";
  @Prop() simple: boolean = false;
  @Prop() copy: boolean = true;
  @State() copied: boolean = false;

  @Prop() codeString: string;

  @Method()
  result() {
    return this.codeString || this.element.querySelector('stellar-code').result();
  }

  async handleCopyClick() {
    this.element.querySelector('stellar-code').copy();
    this.copied = true;

    setTimeout(async () => {
      this.copied = false;
    }, 3500)
  }

  renderCopyButton(props) {
    return (
      <stellar-button onClick={ () => this.handleCopyClick() } {...props}>
        {this.copied ? "👍" : "Copy" }
      </stellar-button>
    )
  }

  render() {
    if (this.simple) {
      return (
        <stellar-callout>
          <stellar-code codeString={this.codeString} numbers={false}>
            <slot></slot>
          </stellar-code>
          { this.copy && this.renderCopyButton({ outline: true, size: "tiny", padding: "tiny" }) }
        </stellar-callout>
      );
    } else {
      return (
        <stellar-card padding="tiny">
          <stellar-tag>{this.language}</stellar-tag>
          <stellar-button onClick={ () => this.handleCopyClick() } ghost>{this.copied ? "👍" : "Copy" }</stellar-button>
          <stellar-code codeString={this.codeString}>
            <slot></slot>
          </stellar-code>
        </stellar-card>
      );
    }
  }
}

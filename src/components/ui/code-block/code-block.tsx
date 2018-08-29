import { Component, Prop, State, Method, Element } from '@stencil/core';

@Component({
  tag: 'stellar-code-block',
  styleUrl: 'code-block.css'
})
export class CodeBlock {
  @Element() element: HTMLElement;
  @Prop({ reflectToAttr: true }) language: string = "html";
  @Prop() simple: boolean = false;
  @Prop() numbers: boolean = true;
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
      <stellar-button onClick={ () => this.handleCopyClick() } {...props} label={this.copied ? "Copied" : "Copy" }>
        {this.copied ? "👍" : "Copy" }
      </stellar-button>
    )
  }

  render() {
    if (this.simple) {
      return (
        <stellar-card padding="none" aria-label={`A code example in ${this.language}`} tabindex={0}>
          <stellar-code codeString={this.codeString} numbers={false}>
            <slot></slot>
          </stellar-code>
          { this.copy && this.renderCopyButton({ ghost: true }) }
        </stellar-card>
      );
    } else {
      return (
        <stellar-card padding="tiny" aria-label={`A code example in ${this.language}`} tabindex={0}>
          <stellar-tag>{this.language}</stellar-tag>
          <stellar-button onClick={ () => this.handleCopyClick() } ghost label={`A code example in ${this.language}`}>{this.copied ? "👍" : "Copy" }</stellar-button>
          <stellar-code codeString={this.codeString} numbers={this.numbers}>
            <slot></slot>
          </stellar-code>
        </stellar-card>
      );
    }
  }
}

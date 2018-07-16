import { Component, State, Prop, Watch, Element } from '@stencil/core';
import showdown from 'showdown';

@Component({
  tag: 'stellar-markdown'
})
export class Markdown {
  @Element() element: HTMLElement;

  @Prop() src: string;

  @State() converted: string;
  @State() raw: string;

  @State() showdown: any = new showdown.Converter();

  @Watch('src')
  onSrcChange () {
    if (this.src) {
     this.fetchMarkdown()
    } else {
      this.getMarkdown();
      this.convertMarkdown();
    }
  }

  getMarkdown() {
    const raw = this.element.querySelector('template').innerHTML;
    this.raw = raw.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }

  convertMarkdown () {
    let converted = this.showdown.makeHtml(this.raw)

    converted = this.replaceAll(converted, "<pre", "<stellar-code-block")
    converted = this.replaceAll(converted, "</pre", "</stellar-code-block")
    converted = this.replaceAll(converted, "<code", "<template")
    converted = this.replaceAll(converted, "</code", "</template")

    this.converted = converted;
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  async fetchMarkdown () {
    const response = await fetch(this.src);
    const text = await response.text();

    this.raw = text;
    this.convertMarkdown();
  }

  componentWillLoad () {
    if (this.src) {
     this.fetchMarkdown()
    } else {
      this.getMarkdown();
      this.convertMarkdown();
    }
  }

  render() {
    return [
      <slot></slot>,
      <copy-wrap full class="wrap">
        <div innerHTML={this.converted}></div>
      </copy-wrap>
    ]
  }
}

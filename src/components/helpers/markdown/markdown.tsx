import { Component, State, Prop, Watch, Element, h} from '@stencil/core';
import showdown from 'showdown';

@Component({
  tag: 'stellar-markdown',
  styleUrl: 'markdown.css'
})
export class Markdown {
  @Element() element: HTMLElement;

  /**
   * Used to reference an external markdown file
   *
   * @type string
   * @memberof Markdown
   */
  @Prop() src: string;

  /**
   * Used to set
   *
   * @type {string}
   * @memberof Markdown
   */
  @Prop({mutable: true}) codeString: string;
  @Prop() flavor: "github"|"original"|"vanilla" = "vanilla";

  @Prop() editable: boolean = false;

  @State() converted: string;
  @State() raw: string;

  @State() showdown: any = new showdown.Converter();

  componentWillLoad () {
    this.showdown.setFlavor(this.flavor)
    this.showdown.setOption('omitExtraWLInCodeBlocks', true)
    this.showdown.setOption('ghCompatibleHeaderId', true)
    this.showdown.setOption('tables', true)
    this.showdown.setOption('tablesHeaderId', true)
    this.showdown.setOption('tasklists', true)
    this.showdown.setOption('emoji', true)
    this.convert()
  }

  @Watch('codeString')
  onCodeStringChange() {
    this.convert()
  }

  @Watch('src')
  onSrcChange () {
    this.convert()
  }

  convert() {
    if (this.src) {
     this.fetchMarkdown()
    } else if (this.codeString) {
      this.raw = this.codeString
      this.convertMarkdown();
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

    converted = this.replaceAll(converted, "<pre><code>", "<stellar-code><template>")
    converted = this.replaceAll(converted, "</pre></code>", "</template></stellar-code>")

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

  render() {
    if (this.editable) {
      return <stellar-card>
        <section><copy-wrap full class="wrap">
          <div innerHTML={this.converted}></div>
        </copy-wrap></section>
        <footer class="bg-theme-base0">
          <stellar-input type="textarea" default={this.codeString} onChange={(e) => { this.codeString = e.detail;this.convert(); }} />
        </footer>
      </stellar-card>
    } else {
      return <copy-wrap full class="wrap">
        <div innerHTML={this.converted}></div>
      </copy-wrap>
    }
  }
}

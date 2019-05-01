import { Component, Element, State, Prop, Method } from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import ezClipboard from 'ez-clipboard';

@Component({
  tag: 'stellar-code',
  styleUrl: 'code.css',
  shadow: true
})
export class Code {
  @Element() element: HTMLElement;
  @Prop({reflectToAttr: true, mutable: true}) language: string = "html";
  @Prop() simple: boolean = false;
  @Prop() codeString: string;
  @Prop() copy: boolean = true;
  @State() copied: boolean = false;
  @Prop({mutable: true}) expanded: boolean = false;
  @Prop() expandable: boolean = false;
  @State() randomName: number = Math.round((Math.random() * 10000));
  @State() observer: MutationObserver;

  @Prop() preview: boolean = true;
  @Prop() feature: boolean = false;

  @State() code: string;
  @State() raw: string;

  componentWillLoad() {
    this.getCode()
  }

  componentDidLoad() {
    this.highlight();

    var observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.getCode()
      });
    });

    observer.observe(this.element, { characterData: true, subtree: true });
  }

  componentWillUpdate() {
    this.getCode()
  }

  componentDidUpdate() {
    this.highlight();
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  @Method()
  highlight() {
    var block = this.element.shadowRoot.querySelector('code');
    Prism.highlightElement(block, false);
  }

  @Method()
  async result() {
    function htmlDecode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
    }
    return htmlDecode(this.code);
  }

  @Method()
  async clipboard() {
    const copyText = await this.result();
    ezClipboard.copyPlain(copyText);
  }

  @Method()
  setCode(code) {
    this.code = code
  }

  getCode() {
    if (this.codeString) {
      this.code = this.codeString.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    } else {
      let code: any = this.element.querySelector('template');

      if (code) {
        const language: any = Array.from(code.classList).filter((s: any) => s.includes('language-'))

        if (language.length === 1) {
          this.language = language[0].substr(9)
        }


        if (!code.innerHTML) {
          code = Array.from(code.children).map((node: any) => {
            return node.outerHTML
          }).join()
        } else {
          code = code.innerHTML
        }

        this.raw = code;

        this.code = code.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
      }
    }
  }

  renderPreview() {
    return <section class="preview flush">
      <div class="result" innerHTML={ this.raw } />
    </section>
  }

  renderCode() {
    return <pre aria-label={`The ${this.language} code`} tabindex={0}>
        <code class={`language-${this.language}`} innerHTML={this.code}></code>
        <div class="hidden"><slot><template><p>There's no code here!</p></template></slot></div>
      </pre>;
  }

  render() {
    if (this.simple) {
      return this.renderCode();
    } else {
      return <stellar-card shadow="light" padding="small">
          { this.feature && <header><slot name="feature" /><slot name="property" /></header> }
          { this.preview && this.renderPreview() }
          <footer class="code">
            { this.renderCode() }
          </footer>
        </stellar-card>
    }
  }
}

import { Component, Element, State, Prop, Method } from '@stencil/core';
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import ezClipboard from 'ez-clipboard';

@Component({
  tag: 'stellar-code',
  styleUrl: 'code.css'
})
export class Code {
  @Element() element: HTMLElement;
  @Prop({reflectToAttr: true, mutable: true}) language: string = "html";
  @Prop({reflectToAttr: true}) numbers: boolean = true;
  @Prop() codeString: string;
  @State() code: string;

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
    var block = this.element.querySelector('code');
    Prism.highlightElement(block, false);
  }

  @Method()
  result() {
    function htmlDecode(input) {
      var doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
    }
    return htmlDecode(this.code);
  }

  @Method()
  copy() {
    const copyText = this.result();
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
      const language: any = Array.from(code.classList).filter((s: any) => s.includes('language-'))

      if (language.length === 1) {
        this.language = language[0].substr(9)
        this.element.closest('stellar-code-block').language = this.language
      }

      if (code) {
        if (!code.innerHTML) {
          // @ts-ignore
          code = Array.from(code.children).map((node: any) => {
            return node.outerHTML
          }).join()

          console.log(code)
        } else {
          // @ts-ignore
          code = code.innerHTML
        }

        this.code = code.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
      }
    }
  }

  render() {
    var classes = this.numbers ? `show-line-numbers` : ``;

    return (
      <pre class={classes}>
        <code class={`language-${this.language}`} innerHTML={this.code}></code>

        <div class="hidden"><slot><template><p>There's no code here!</p></template></slot></div>
      </pre>
    );
  }
}

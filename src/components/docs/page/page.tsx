import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'stellar-docs-page'
})
export class DocsPage {
  @Prop() match: MatchResults;

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div>
          <stellar-docs-header></stellar-docs-header>
          <stellar-layout size="large" type="sidebar" align="top">
            <aside>
              <stellar-docs-navigation />
            </aside>
            <main>
              <stellar-markdown src={`/build/data/markdown/${this.match.params.name}.md`}></stellar-markdown>
            </main>
          </stellar-layout>
        </div>
      );
    }
  }
}

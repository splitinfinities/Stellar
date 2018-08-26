import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'stellar-docs-page',
  styleUrl: 'page.css'
})
export class DocsPage {
  @Prop() match: MatchResults;

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div>
          <stellar-docs-header></stellar-docs-header>
          <stellar-layout size="large" type="sidebar">
            <aside>
              <stellar-docs-navigation />
            </aside>
            <main>
              <stellar-markdown src={`/global/data/markdown/${this.match.params.name}`}></stellar-markdown>
            </main>
          </stellar-layout>
        </div>
      );
    }
  }
}

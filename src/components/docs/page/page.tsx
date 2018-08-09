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
        </div>
      );
    }
  }
}

import { Component } from '@stencil/core';

@Component({
  tag: 'stellar-docs-not-found',
  styleUrl: 'not-found.css'
})
export class DocsNotFound {
  render() {
    return (
      <div class='app-profile'>
        <h1>404</h1>
      </div>
    );
  }
}

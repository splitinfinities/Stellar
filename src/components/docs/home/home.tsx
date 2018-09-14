import { Component } from '@stencil/core';

@Component({
  tag: 'stellar-docs-home',
  styleUrl: 'home.css'
})
export class DocsHome {

  render() {
    return (
      <div>
        <stellar-docs-header></stellar-docs-header>
        <stellar-layout size="large" type="sidebar">
          <aside>
            <stellar-docs-navigation />
          </aside>
          <main>
            <h1>Home!</h1>
          </main>
        </stellar-layout>
      </div>
    );
  }
}

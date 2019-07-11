import { Component, h } from '@stencil/core';
import { Dependencies } from '../loadDependencies';
window["deps"] = Dependencies.get()

@Component({
  tag: 'stellar-documentation',
  styleUrl: 'documentation.css'
})
export class DocumentationRoot {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url='/' component='stellar-docs-home' exact={true} />
          <stencil-route url='/component/:name' component='stellar-docs-component' />
          <stencil-route url='/:name' component='stellar-docs-page' exact={true} />
          <stencil-route component="stellar-docs-not-found" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}

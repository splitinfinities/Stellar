import { Component, h, Prop } from '@stencil/core';
import Tunnel from '../dependencies';

@Component({
  tag: 'stellar-docs-navigation'
})
export class DocsNavigation {
  @Prop() loader;
  @Prop() collection;
  @Prop() documentation;
  @Prop() ready;

  renderItem(tag_name) {
    const name = tag_name.replace("stellar-", "")
    return <stellar-item fit wrap type="stencil-route-link" route={true} href={`/component/${tag_name}`}>
        {name}
        <small class="db theme-base5">{`<${tag_name}>`}</small>
      </stellar-item>

  }

  render() {
    return this.ready && <stellar-card padding="tiny">
        <div>
          <stellar-item type="stencil-route-link" route={true} href="/">Home</stellar-item>
          <stellar-accordion tight>
            <stellar-item type="button" slot="label">Introduction</stellar-item>
            <stellar-item type="stencil-route-link" route={true} href="/design-principles">Design Principles</stellar-item>
            <stellar-item type="stencil-route-link" route={true} href="/installation">Installation</stellar-item>
            <stellar-item type="stencil-route-link" route={true} href="/tutorial">Tutorial</stellar-item>
            <stellar-item type="stencil-route-link" route={true} href="/deploying">Deploying</stellar-item>
            <stellar-item type="stencil-route-link" route={true} href="/browser-support">Browser Support</stellar-item>
          </stellar-accordion>
          <stellar-accordion tight>
            <stellar-item slot="label">Components <stellar-tag size="small" color="theme-complement8" class="self-end maa mr0" pill>{this.loader.components.length}</stellar-tag></stellar-item>
              {this.loader.components.map( (component) => this.renderItem(component) )}
          </stellar-accordion>
        </div>
      </stellar-card>
  }
}

Tunnel.injectProps(DocsNavigation, ['loader', 'collection', 'documentation', 'ready']);

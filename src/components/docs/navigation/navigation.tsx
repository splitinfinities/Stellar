import { Component, Prop, State } from '@stencil/core';
import '@stencil/router'

@Component({
  tag: 'stellar-docs-navigation',
  styleUrl: 'navigation.css'
})
export class DocsNavigation {
  @Prop() invert: boolean = false;
  @Prop() mark: string;
  @Prop() max: number = 10;
  @Prop() value: number = 0;
  @State() data;

  async componentWillLoad() {
    this.data = await window["deps"].fetchCollection();

  }

  render() {
    return [
      <stellar-card padding="small">
        <stellar-item type="stencil-route-link" href="/">Home</stellar-item>
        <stellar-accordion tight label="Introduction">
          <stellar-item type="stencil-route-link" href="/design-principles">Design Principles</stellar-item>
          <stellar-item type="stencil-route-link" href="/installation">Installation</stellar-item>
          <stellar-item type="stencil-route-link" href="/tutorial">Tutorial</stellar-item>
          <stellar-item type="stencil-route-link" href="/deploying">Deploying</stellar-item>
          <stellar-item type="stencil-route-link" href="/browser-support">Browser Support</stellar-item>
        </stellar-accordion>
        { this.data && <stellar-accordion tight={true}>
          <stellar-item slot="label">Components <stellar-tag size="small" color="blue8" class="self-end maa mr0" pill>{this.data.components.length}</stellar-tag></stellar-item>
            {this.data.components.map((component) => {
              const name = component.tag.replace("stellar-", "")

              return (
                <stellar-item type="stencil-route-link" href={`/component/${name}`}>
                  <copy-wrap>
                    {component.componentClass}
                    <small class="db theme-base5">{`<${component.tag}>`}</small>
                  </copy-wrap>
                </stellar-item>
              )
            })}
          </stellar-accordion>
        }
      </stellar-card>
    ];
  }
}






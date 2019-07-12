import { Component, Prop, h, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import Tunnel from '../dependencies';
import { Load } from '../loadDependencies';

@Component({
  tag: 'stellar-docs-component'
})
export class DocsComponent {
  @Prop() match: MatchResults;
  @Prop() ready: boolean;
  @Prop() loader: Load;

  @State() data: any;

  async componentWillLoad() {
    const tag = this.match.params.name;
    this.data = await this.loader.getAllForTag(tag);
  }

  async componentDidUpdate() {
    const tag = this.match.params.name;
    this.data = await this.loader.getAllForTag(tag);
  }

  renderUsage() {
    return (
      <div>
        <stellar-tabs name="stellar-code-examples">
          {this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
            return (
              <stellar-tab name={`#${this.data.tag}-${name}`} open={index === 0}>{name}</stellar-tab>
            )
          })}
          <stellar-tab></stellar-tab>
        </stellar-tabs>

        {this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
          return (
            <stellar-content for="stellar-code-examples" id={`${this.data.tag}-${name}`} open={index === 0}>
              <stellar-code codeString={this.data.documentation.usage[name]} preview />
            </stellar-content>
          )
        })}
      </div>
    )
  }

  render() {
    if (this.match && this.match.params.name && this.data) {
      return (
        <div>
          <stellar-docs-header></stellar-docs-header>
          <stellar-layout size="large" type="sidebar" align="top">
            <aside>
              <stellar-docs-navigation />
            </aside>
            <main class="min-vh-100">
              <stellar-markdown codeString={this.data.documentation && this.data.documentation.readme || "Readme to come..."} />
              <stellar-tabs name="stellar-docs" block>
                <stellar-tab name="design">Design</stellar-tab>
                <stellar-tab name="code" open>Code</stellar-tab>
                <stellar-tab name="details">Details</stellar-tab>
              </stellar-tabs>
              <stellar-content for="stellar-docs" id="details">
                <stellar-layout size="flush">
                  <stellar-markdown src={`/components/${this.data.tag}/readme.md`} />
                </stellar-layout>
              </stellar-content>
              <stellar-content for="stellar-docs" id="design">
                <stellar-layout size="flush">
                  <h1>Design</h1>
                </stellar-layout>
              </stellar-content>
              <stellar-content for="stellar-docs" id="code" open>
                <stellar-layout size="flush" align="top">
                  <article>
                    { this.renderUsage() }
                  </article>
                </stellar-layout>
                <stellar-layout size="flush" align="top">
                  <aside>
                    <stellar-card padding="none">
                      <div>
                        <p class="fw6 fs7 pa3 tc">Bundles</p>
                        <hr class="mv0" />
                        <stellar-accordion tight={true}>
                          <stellar-item slot="label">Uses {this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.length || "0"}</stellar-item>
                          {this.data.stats && this.data.stats.dependencies && this.data.stats.dependencies.map(component => <stellar-item type="a" href={`/component/${component}`} route={true}>{component}</stellar-item>)}
                        </stellar-accordion>
                        <stellar-accordion tight={true}>
                          <stellar-item slot="label">Used by {this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.length || "0"}</stellar-item>
                          {this.data.stats && this.data.stats.dependencyOf && this.data.stats.dependencyOf.map(component => <stellar-item type="a" href={`/component/${component}`} route={true}>{component}</stellar-item>)}
                        </stellar-accordion>
                      </div>
                    </stellar-card>
                  </aside>
                </stellar-layout>
              </stellar-content>
            </main>
          </stellar-layout>
        </div>
      );
    }
  }
}

Tunnel.injectProps(DocsComponent, ['loader', 'ready']);

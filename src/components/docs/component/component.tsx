import { Component, Prop, State, Method } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'stellar-docs-component',
  styleUrl: 'component.css'
})
export class DocsComponent {

  @Prop() match: MatchResults;
  @State() data;

  componentWillLoad() {
    this.pull_data()
  }

  componentWillUpdate() {
    this.pull_data()
  }

  @Method()
  show_data() {
    return this.data;
  }

  @Method()
  async pull_data() {
    if (this.match && this.match.params.name) {
      this.data = await window["deps"].getAllForTag(this.match.params.name);
    }
  }

  renderUsage() {
    return (
      <div>
        <stellar-tabs name="stellar-code-examples">
          {this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
            return (
              <stellar-tab href={`#${this.data.tag}-${name}`} open={index === 0}>{name}</stellar-tab>
            )
          })}
          <stellar-tab></stellar-tab>
        </stellar-tabs>

        {this.data.documentation && this.data.documentation.usage && Object.keys(this.data.documentation.usage).map((name, index) => {
          return (
            <stellar-content for="stellar-code-examples" name={`${this.data.tag}-${name}`} open={index === 0}>
              <stellar-documentation codeString={this.data.documentation.usage[name]} />
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
          <stellar-layout type="sidebar" size="full" align="baseline">
            <aside>
              <stellar-docs-navigation></stellar-docs-navigation>
            </aside>
            <main class="min-vh-100">
              <stellar-markdown codeString={this.data.documentation && this.data.documentation.readme || "Readme to come..."} />
              <stellar-tabs name="stellar-docs" block>
                <stellar-tab href="#design">Design</stellar-tab>
                <stellar-tab href="#code" open={true}>Code</stellar-tab>
                <stellar-tab href="#details">Details</stellar-tab>
              </stellar-tabs>
              <stellar-content for="stellar-docs" name="details">
                <stellar-layout size="flush">
                  <stellar-markdown src={`/components/${this.data.tag}/readme.md`} />
                </stellar-layout>
              </stellar-content>
              <stellar-content for="stellar-docs" name="design">
                <stellar-layout size="flush">
                  <h1>Design</h1>
                </stellar-layout>
              </stellar-content>
              <stellar-content for="stellar-docs" name="code" open>
                <stellar-layout type="sidebar-right" size="flush" align="top">
                  <article>
                    { this.renderUsage() }
                  </article>
                  <aside>
                    <stellar-card padding="small">
                      <h4>Bundles</h4>

                    </stellar-card>
                    <stellar-card padding="tiny">
                      <stellar-accordion tight={true}>
                        <stellar-item slot="label">Loads {this.data.collection && this.data.collection.dependencies && this.data.collection.dependencies.length || "0"}</stellar-item>

                      </stellar-accordion>
                      <stellar-accordion tight={true}>
                        <stellar-item slot="label">Loaded by {this.data.collection && this.data.collection.dependencyOf && this.data.collection.dependencyOf.length || "0"}</stellar-item>

                      </stellar-accordion>
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

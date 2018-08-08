import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Dependencies } from '../loadDependencies';

@Component({
  tag: 'stellar-docs-component',
  styleUrl: 'component.css'
})
export class DocsComponent {

  @Prop() match: MatchResults;
  @Prop() tag: string = "accordion";

  @State() data;

  componentWillLoad() {
    if (this.match && this.match.params.name) {
      this.data = Dependencies.get().getAllForTag(this.match.params.name);
    }
  }

  renderUsage () {
    return (
      <div>
        <stellar-tabs name="stellar-code-examples">
          { Object.keys(this.data.documentation.usage).map((name, index) => {
            return (
              <stellar-tab href={`#${this.tag}-${name}`} open={index === 0}>{name}</stellar-tab>
            )
          }) }
          <stellar-tab></stellar-tab>
        </stellar-tabs>

        { Object.keys(this.data.documentation.usage).map((name, index) => {
          return (
            <stellar-content for="stellar-code-examples" name={`${this.tag}-${name}`} open={index === 0}>
              <stellar-documentation codeString={this.data.documentation.usage[name]} />
            </stellar-content>
          )
        }) }
      </div>
    )
  }

  renderBundles() {
    return (
      <stellar-card padding="small">
        <h4>Bundles</h4>
        {
          this.data.entry.bundles.map((bundle) => {
            return (
              <p>
                {bundle.target ? bundle.target : "Modern"}:&nbsp;
                <stellar-tag size="small"><stellar-unit value={bundle.size} round /></stellar-tag>
              </p>
            )
        })}
      </stellar-card>
    )
  }

  renderDependencies() {
    return (
      <stellar-card padding="tiny">
        <stellar-accordion tight={true}>
          <stellar-item slot="label">Loads {this.data.stats.dependencies.length}</stellar-item>
          {this.data.stats.dependencies.map((component) => {
            const name = component.replace("stellar-", "")
            return <stellar-item type="a" href={`/component/${name}`}>{name}</stellar-item>
          })}
        </stellar-accordion>
        <stellar-accordion tight={true}>
          <stellar-item slot="label">Loaded by {this.data.stats.dependencyOf.length}</stellar-item>
          {this.data.stats.dependencyOf.map((component) => {
            const name = component.replace("stellar-", "")
            return <stellar-item type="a" href={`/component/${name}`}>{name}</stellar-item>
          })}
        </stellar-accordion>
      </stellar-card>
    )
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div>
          <copy-wrap class="mb4">
            <h1>{this.tag}</h1>
            <h3 class="theme-complement5">A Description of what this component does!</h3>
          </copy-wrap>
          <stellar-tabs name="stellar-docs" block>
            <stellar-tab href="#design">Design</stellar-tab>
            <stellar-tab href="#code" open>Code</stellar-tab>
            <stellar-tab href="#details">Details</stellar-tab>
          </stellar-tabs>
          <stellar-content for="stellar-docs" name="details">
            <stellar-layout size="flush">
              <stellar-markdown src={`/component/${this.tag}/readme.md`} />
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
                { this.renderBundles() }
                { this.renderDependencies() }
              </aside>
            </stellar-layout>
          </stellar-content>
        </div>
      );
    }
  }
}

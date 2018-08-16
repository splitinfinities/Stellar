import { Component, State } from '@stencil/core';

@Component({
  tag: 'stellar-docs-navigation',
  styleUrl: 'navigation.css'
})
export class DocsNavigation {
  @State() data;
  @State() documentation;

  componentWillLoad() {
    this.loadData()
  }

  async loadData() {
    this.data = await window["deps"].fetchCollection();
    this.documentation = await window["deps"].fetchDocumentation();
  }

  usage(tag: string) {
    const details = this.documentation.components.find((element) => {
      return element.tag === tag
    })

    return details && details.usage && Object.keys(details.usage).length || false;
  }

  renderItem(component) {
    const name = component.tag.replace("stellar-", "")
    return this.usage(component.tag) && (
      <stellar-item type="a" route={true} href={`/component/${name}`}>
        <copy-wrap>
          {component.componentClass}
          <small class="db theme-base5">{`<${component.tag}>`}</small>
        </copy-wrap>
        <stellar-tag pill color="theme-complement7">{this.usage(component.tag)}</stellar-tag>
      </stellar-item>
    )
  }

  render() {
    return this.data && (
      <stellar-card padding="tiny">
        <stellar-item type="a" route={true} href="/">Home</stellar-item>
        <stellar-accordion tight>
          <stellar-item type="button" slot="label">Introduction</stellar-item>
          <stellar-item type="a" route={true} href="/design-principles">Design Principles</stellar-item>
          <stellar-item type="a" route={true} href="/installation">Installation</stellar-item>
          <stellar-item type="a" route={true} href="/tutorial">Tutorial</stellar-item>
          <stellar-item type="a" route={true} href="/deploying">Deploying</stellar-item>
          <stellar-item type="a" route={true} href="/browser-support">Browser Support</stellar-item>
        </stellar-accordion>
        <stellar-accordion tight>
          <stellar-item slot="label">Components <stellar-tag size="small" color="theme-complement8" class="self-end maa mr0" pill>{this.data.components.length}</stellar-tag></stellar-item>
            {this.data.components.map( (component) => this.renderItem(component) )}
        </stellar-accordion>
      </stellar-card>
    );
  }
}

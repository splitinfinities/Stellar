import { Component, State, Watch } from '@stencil/core'

@Component({
  tag: 'stellar-documentation-site'
})
export class DocumentationSite {

  @State() documentation;
  @State() collection;
  @State() stats;

  @State() current: any;
  @State() currentStats: any;
  @State() currentEntry: any;
  @State() currentDocumentation: any;

  @State() themePrimary: string = "red";
  @State() themeComplement: string = "indigo";

  @State() ready: boolean = false;

  @Watch('themePrimary')
  @Watch('themeComplement')
  onColorUpdate() {
    document.querySelector('body').setAttribute('class', `theme-${this.themePrimary} complement-${this.themeComplement}`);
  }


  @Watch('current')
  onCurrentUpdate() {
    this.stats.components.find((item) => {
      if (item.tag === this.current) {
        this.currentStats = item
      }
    })

    this.stats.entries.find((item) => {
      if (item.entryId.indexOf(this.current) !== -1) {
        this.currentEntry = item
      }
    })

    this.documentation.components.find((item) => {
      if (item.tag === this.current) {
        this.currentDocumentation = item
      }
    })

    // console.log(this.currentStats);
    // console.log(this.currentEntry);
    // console.log(this.currentDocumentation);

    this.ready = true
  }

  componentWillLoad() {
    this.fetchStats()
  }

  async fetchStats() {
    const statsRequest = await fetch("./stats.json");
    this.stats = await statsRequest.json();

    const docsRequest = await fetch("./documentation.json");
    this.documentation = await docsRequest.json();

    this.current = "stellar-image";
  }

  async fetchDocumentation() {
    const request = await fetch("./documentation.json");
    this.documentation = await request.json();
  }

  async fetchCollection() {
    const request = await fetch("./collection.json");
    this.collection = await request.json();
  }

  getUsageCount (tag: string) {
    let number;

    this.documentation.components.forEach((item) => {
      if (item.tag === tag) {
        number = Object.keys(item.usage).length
      }
    })

    return number;
  }

  renderBanner() {
    return (
      <stellar-message striped type="alert" size="full">
        <stellar-asset name="happy"></stellar-asset>
        <p>Stellar is still an alpha product - some things may change! We'll do out best to notify you when something changes.</p>
        <stellar-button size="tiny" pill>See change log <stellar-asset name="arrow-forward" align="right"></stellar-asset></stellar-button>
      </stellar-message>
    )
  }

  renderHeader() {
    return (
      <stellar-layout size="full" class="relative mb5" type="sidebar-right">
        <stellar-starscape></stellar-starscape>
        <copy-wrap class="invert mv5">
          <h1 class="flex fs-massive white">
            <div class="flex mr4 flex-column items-center">
              <stellar-asset src="./global/vector/mark.svg"></stellar-asset>
              <stellar-tag color="blue5" class="mt4">v0.0.1</stellar-tag>
            </div>
            <small>Stellar!
              <small class="fs1 db w-100 gray2">A Beautiful, Complete Design System</small>
            </small>
          </h1>
        </copy-wrap>
        <stellar-card>
          <stellar-grid compact>
            <stellar-select label="Primary color" onChange={(e) => { this.themePrimary = e.detail; }} size="small" overlay>
              <stellar-item value="red" selected>Red</stellar-item>
              <stellar-item value="orange">Orange</stellar-item>
              <stellar-item value="yellow">Yellow</stellar-item>
              <stellar-item value="lime">Lime</stellar-item>
              <stellar-item value="green">Green</stellar-item>
              <stellar-item value="teal">Teal</stellar-item>
              <stellar-item value="cyan">Cyan</stellar-item>
              <stellar-item value="blue">Blue</stellar-item>
              <stellar-item value="indigo">Indigo</stellar-item>
              <stellar-item value="violet">Violet</stellar-item>
              <stellar-item value="fuchsia">Fuchsia</stellar-item>
              <stellar-item value="pink">Pink</stellar-item>
              <stellar-item value="gray">Gray</stellar-item>
            </stellar-select>

            <stellar-select label="Secondary color" onChange={(e) => { this.themeComplement = e.detail; }} size="small" overlay>
              <stellar-item value="red">Red</stellar-item>
              <stellar-item value="orange">Orange</stellar-item>
              <stellar-item value="yellow">Yellow</stellar-item>
              <stellar-item value="lime">Lime</stellar-item>
              <stellar-item value="green">Green</stellar-item>
              <stellar-item value="teal">Teal</stellar-item>
              <stellar-item value="cyan">Cyan</stellar-item>
              <stellar-item value="blue">Blue</stellar-item>
              <stellar-item value="indigo" selected>Indigo</stellar-item>
              <stellar-item value="violet">Violet</stellar-item>
              <stellar-item value="fuchsia">Fuchsia</stellar-item>
              <stellar-item value="pink">Pink</stellar-item>
              <stellar-item value="gray">Gray</stellar-item>
            </stellar-select>

            <stellar-toggle type="checkbox">
              <stellar-toggle-option value="inverted">Inverted</stellar-toggle-option>
            </stellar-toggle>
          </stellar-grid>
        </stellar-card>
      </stellar-layout>
    )
  }

  renderUsage() {
    return (
      <div>
        <stellar-tabs name="stellar-code-examples">
          {Object.keys(this.currentDocumentation.usage).map((name, index) => {
            return (
              <stellar-tab href={`#${this.current}-${name}`} open={index === 0}>{name}</stellar-tab>
            )
          })}
          <stellar-tab></stellar-tab>
        </stellar-tabs>

        {Object.keys(this.currentDocumentation.usage).map((name, index) => {
          return (
            <stellar-content for="stellar-code-examples" name={`${this.current}-${name}`} open={index === 0}>
              <stellar-documentation codeString={this.currentDocumentation.usage[name]} />
            </stellar-content>
          )
        })}

      </div>
    )
  }

  renderContent() {
    return (
      <stellar-layout type="sidebar" size="full" align="baseline">
        <aside>
          <stellar-card padding="small">
            <stellar-item type="a" href="index.html">Home</stellar-item>
            <stellar-accordion tight label="Introduction">
              <stellar-item type="a" href="design-principles.html">Design Principles</stellar-item>
              <stellar-item type="a" href="installation.html">Installation</stellar-item>
              <stellar-item type="a" href="tutorial.html">Tutorial</stellar-item>
              <stellar-item type="a" href="deploying.html">Deploying</stellar-item>
              <stellar-item type="a" href="browser-support.html">Browser Support</stellar-item>
            </stellar-accordion>
            { this.stats && <stellar-accordion tight={true}>
              <stellar-item slot="label">Components <stellar-tag size="small" color="blue8" class="self-end maa mr0" pill>{this.stats.components.length}</stellar-tag></stellar-item>
              {this.stats.components.map((component) => {
                const name = component.tag.replace("stellar-", "")

                if (this.getUsageCount(component.tag) > 0) {
                  return <stellar-item type="button" href={`${name}.html`} onClick={() => { this.current = component.tag; }}>
                    {name}
                    <stellar-tag class="ml-0" pill>{this.getUsageCount(component.tag)}</stellar-tag>
                  </stellar-item>
                }

              })}
              </stellar-accordion>
            }
          </stellar-card>
        </aside>
        <main class="min-vh-100">
          <copy-wrap class="mb4">
            <h1>{this.current}</h1>
            <h3 class="theme-complement5">A Description of what this component does!</h3>
          </copy-wrap>
          <stellar-tabs name="stellar-docs" block>
            <stellar-tab href="#design">Design</stellar-tab>
            <stellar-tab href="#code" open>Code</stellar-tab>
            <stellar-tab href="#details">Details</stellar-tab>
          </stellar-tabs>
          <stellar-content for="stellar-docs" name="details">
            <stellar-layout size="flush">
              <stellar-markdown src={`/components/${this.current.replace("stellar-", "")}/readme.md`} />
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
                  {
                    this.currentEntry.bundles.map((bundle) => {
                      return (
                        <p>
                          {bundle.target ? bundle.target : "Modern"}:&nbsp;
                          <stellar-tag size="small"><stellar-unit value={bundle.size} round /></stellar-tag>
                        </p>
                      )
                  })}
                </stellar-card>
                <stellar-card padding="tiny">
                  <stellar-accordion tight={true}>
                    <stellar-item slot="label">Loads {this.currentStats.dependencies.length}</stellar-item>
                    {this.currentStats.dependencies.map((component) => {
                      const name = component.replace("stellar-", "")
                      return <stellar-item type="button" href={`${name}.html`} onClick={() => { this.current = component; }}>{name}</stellar-item>
                    })}
                  </stellar-accordion>
                  <stellar-accordion tight={true}>
                    <stellar-item slot="label">Loaded by {this.currentStats.dependencyOf.length}</stellar-item>
                    {this.currentStats.dependencyOf.map((component) => {
                      const name = component.replace("stellar-", "")
                      return <stellar-item type="button" href={`${name}.html`} onClick={() => { this.current = component; }}>{name}</stellar-item>
                    })}
                  </stellar-accordion>
                </stellar-card>
              </aside>
            </stellar-layout>
          </stellar-content>
        </main>
      </stellar-layout>
    )
  }

  renderFooter() {
    return (
      <stellar-footer />
    )
  }

  render() {
    return this.ready && <div class={`theme-${this.themePrimary} complement-${this.themeComplement}`}>
       { this.renderBanner() }
       { this.renderHeader() }
       { this.renderContent() }
       { this.renderFooter() }
     </div>
  }
}

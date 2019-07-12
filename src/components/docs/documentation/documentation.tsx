import { Component, h, State, Prop } from '@stencil/core';
import { Dependencies, Load } from '../loadDependencies';
import Tunnel from '../dependencies';

@Component({
  tag: 'stellar-documentation',
  styleUrl: 'documentation.css'
})
export class DocumentationRoot {
  @Prop() package_link: string;
  @Prop() collection_link: string;
  @Prop() documentation_link: string;
  @Prop() coverage_link: string;
  @Prop() stats_link: string;

  @State() ready: boolean = false;
  @State() package: any;
  @State() collection: any;
  @State() documentation: any;
  @State() coverage: any;
  @State() stats: any;
  @State() loader: Load;

  async componentWillLoad() {
    const loader = Dependencies.get();

    loader.package_link = this.package_link;
    loader.collection_link = this.collection_link;
    loader.documentation_link = this.documentation_link;
    loader.coverage_link = this.coverage_link;
    loader.stats_link = this.stats_link;

    await loader.perform();

    this.package = loader.package;
    this.collection = loader.collection;
    this.documentation = loader.documentation;
    this.coverage = loader.coverage;
    this.stats = loader.stats;
    this.loader = loader;
    this.ready = true;
  }

  render() {
    const tunnelState = {
      ready: this.ready,
      package: this.package,
      collection: this.collection,
      documentation: this.documentation,
      coverage: this.coverage,
      loader: this.loader,
      stats: this.stats
    };

    return (
      <Tunnel.Provider state={tunnelState}>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/component/:name' component='stellar-docs-component' />
            <stencil-route url='/:name' component='stellar-docs-page' exact={true} />
            <stencil-route url='/' component='stellar-docs-home' exact={true} />
            <stencil-route component="stellar-docs-not-found" />
          </stencil-route-switch>
        </stencil-router>
      </Tunnel.Provider>
    );
  }
}

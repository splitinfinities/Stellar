import Dexie from 'dexie';

export class Load {
  collection;
  documentation;
  package;
  coverage;
  stats;

  package_link;
  collection_link;
  documentation_link;
  coverage_link;
  stats_link;

  db;

  constructor () {
    this.database()
  }

  database() {
    this.db = new Dexie("components");
    this.db.version(1).stores({
      tags: '++id, tag',
      package: '++id, version'
    });
  }

  async perform () {
    this.package = await this.fetchPackage();
    this.collection = await this.fetchCollection();
    this.documentation = await this.fetchDocumentation();
    this.coverage = await this.fetchCoverage();
    this.stats = await this.fetchStats();

    return this;
  }

  async fetchPackage () {
    let pkg = await this.db.package.orderBy('version').last();

    const request = await fetch(this.package_link);
    const new_pkg = await request.json();

    if (!pkg || pkg.version !== new_pkg.version) {
      this.db.package.put(new_pkg);
      pkg = new_pkg;
    }

    return pkg;
  }

  async fetchCollection () {
    const request = await fetch(this.collection_link);
    return await request.json();
  }

  async fetchDocumentation () {
    const request = await fetch(this.documentation_link);
    return await request.json();
  }

  async fetchCoverage () {
    const request = await fetch(this.coverage_link);
    return await request.json();
  }

  async fetchStats () {
    const request = await fetch(this.stats_link);
    return await request.json();
  }

  async getUsageCount (tag: string) {
    const data = await this.getAllForTag(tag)
    return data.documentation && data.documentation.usage && Object.keys(data.documentation.usage).length || 0;
  }

  get components () {
    return this.documentation.components.map((tag) => { return tag.tag })
  }

  async getAllForTag (tag: string): Promise<{tag: string, documentation: any, collection: any, coverage: any, stats: any}> {
    const edited_tag = `stellar-${tag}`;
    let data = await this.db.tags.where('tag').equals(edited_tag).first();

    if (!data) {
      let documentation = {}
      let coverage = []
      let stats: any = {}

      documentation = this.documentation.components.find((item) => { return item.tag === tag })

      stats = this.stats.entries.find((item) => {
        return item.components.find((component) => {
          return component.tag === tag;
        });
      })

      coverage = this.coverage[stats.inputs[0]]

      data = {
        tag: edited_tag,
        documentation,
        coverage,
        stats
      }

      this.db.tags.put(data)
    }

    return data;
  }

  getVersion () {
    return this.package.version || "0.0.0";
  }
}


export const Dependencies = (function () {
    var instance;

    const create = () => {
        return new Load();
    }

    return {
        get(): Load {
            if (!instance) {
                instance = create();
            }
            return instance;
        }
    };
})();

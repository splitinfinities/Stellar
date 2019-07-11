import Dexie from 'dexie';

export class Load {
  path = '/build/data';

  collection;
  documentation;
  package;
  coverage;
  stats;
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

    const request = await fetch(`${this.path}/package.json`);
    const new_pkg = await request.json();

    if (!pkg || pkg.version !== new_pkg.version) {
      this.db.package.put(new_pkg);
      pkg = new_pkg;
    }

    return pkg;
  }

  async fetchCollection () {
    const request = await fetch(`${this.path}/collection.json`);
    return await request.json();
  }

  async fetchDocumentation () {
    const request = await fetch(`${this.path}/documentation.json`);
    return await request.json();
  }

  async fetchCoverage () {
    const request = await fetch(`${this.path}/test-coverage.json`);
    return await request.json();
  }

  async fetchStats () {
    const request = await fetch(`${this.path}/stats.json`);
    return await request.json();
  }

  async getUsageCount (tag: string) {
    const data = await this.getAllForTag(tag)
    return data.documentation && data.documentation.usage && Object.keys(data.documentation.usage).length || 0;
  }

  async getAllForTag (tag: string) {
    const edited_tag = `stellar-${tag}`;
    let data = await this.db.tags.where('tag').equals(edited_tag).first();

    if (!data) {
      await this.perform();

      let documentation = {}
      let collection = {}
      let coverage = []
      let stats = {}

      documentation = this.documentation.components.find((item) => {
        return (item.tag === edited_tag);
      })

      collection = this.collection.components.find((item) => {
        return (item.tag.indexOf(edited_tag) !== -1);
      })

      coverage = Object.keys(this.coverage).map((item) => {
        if (item.indexOf(tag) !== -1) {
          return { file: item, results: this.coverage[item] }
        }
      }).filter(Boolean)

      stats = this.stats.entries.map((entries) => {
        let results = entries.components.map((entry) => {
          if (entry.tag.indexOf(edited_tag) !== -1) {
            return entry
          }
        }).filter(Boolean)

        if (results.length !== 0) {
           return entries;
        }
      }).filter(Boolean);

      data = {
        tag: edited_tag,
        collection,
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
        get() {
            if (!instance) {
                instance = create();
            }
            return instance;
        }
    };
})();

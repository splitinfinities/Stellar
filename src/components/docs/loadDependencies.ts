export class Load {
  path = '/global/data';

  collection;
  documentation;
  package;
  coverage;
  stats;

  async perform() {
    await this.fetchPackage();
    await this.fetchCollection();
    await this.fetchDocumentation();
    await this.fetchCoverage();
    await this.fetchStats();

    console.debug(this.collection, this.documentation, this.package, this.coverage, this.stats)
  }

  async fetchPackage() {
    const request = await fetch(`${this.path}/package.json`);
    this.package = await request.json();
  }

  async fetchCollection() {
    const request = await fetch(`${this.path}/collection.json`);
    this.collection = await request.json();
  }

  async fetchDocumentation() {
    const request = await fetch(`${this.path}/documentation.json`);
    this.documentation = await request.json();
  }

  async fetchCoverage() {
    const request = await fetch(`${this.path}/test-coverage.json`);
    this.coverage = await request.json();
  }

  async fetchStats() {
    const request = await fetch(`${this.path}/stats.json`);
    this.stats = await request.json();
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

  async getAllForTag(tag: string) {

    let documentation = {}
    let collection = {}
    let coverage = {}
    let stats = {}

    this.documentation.components.find((item) => {
      if (item.tag === tag) {
        documentation = item
        console.log(documentation)
      }
    })

    return {
      collection,
      documentation,
      coverage,
      stats
    }
  }

  getVersion () {
    return this.package.version || "0.0.0";
  }
}


export const Dependencies = (function () {
    var instance;

    function create() {
        var object = new Load();
        return object;
    }

    return {
        get: function () {
            if (!instance) {
                instance = create();
            }
            return instance;
        }
    };
})();

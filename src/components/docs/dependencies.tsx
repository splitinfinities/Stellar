import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';
import { Load } from './loadDependencies';

export interface CollectionModel {
    "entries": string[],
    "compiler": {
      "name": string,
      "version": string,
      "typescriptVersion": string
    },
    "collections": { "name": string, "tags": string[] }[],
    "bundles": string[]
}

export interface PackageModel {
    "name": string,
    "version": string,
    "license": string,
    "description": string,
    "module": string,
    "main": string,
    "types": string,
    "collection": string,
    "es2015": string,
    "es2017": string,
    "jsnext:main": string,
    "unpkg": string,
    "files": string[],
    "scripts": {[name: string]: string},
    "dependencies": {[name: string]: string},
    "devDependencies": {[name: string]: string},
    "jest": {[name: string]: string},
    "np": {[name: string]: any},
}

export interface DocumentationModel {
    "timestamp": string,
    "compiler": {[name: string]: string},
    "components": {
      tag: string,
      encapsulation: string,
      readme: string,
      docs: string,
      docsTags: string,
      usage: {[name: string]: string},
      props: {
        "name": string,
        "type": string,
        "mutable": boolean,
        "attr": string,
        "reflectToAttr": boolean,
        "docs": string,
        "docsTags": string[],
        "default": string,
        "optional": boolean,
        "required": boolean
      }[],
      methods: {
        "name": string,
        "returns": {
          "type": string,
          "docs": string
        },
        "signature": string,
        "parameters": string[],
        "docs": string,
        "docsTags": string[]
      }[],
      events: {
        "event": string,
        "detail": string,
        "bubbles": boolean,
        "cancelable": boolean,
        "composed": boolean,
        "docs": string,
        "docsTags": string[]
      }[],
      styles: string[],
      slots: string[]
    }[]
}

export interface TestCoverageResult {
  "total": number,
  "covered": number,
  "skipped": number,
  "pct": number
}

export interface CoverageModel {
  "total": {
    "lines": TestCoverageResult,
    "statements": TestCoverageResult,
    "functions": TestCoverageResult,
    "branches": TestCoverageResult
  },
  [file: string]: {
    "lines": TestCoverageResult,
    "statements": TestCoverageResult,
    "functions": TestCoverageResult,
    "branches": TestCoverageResult
  }
}

export interface ComponentStatsModel {
  "tag": string,
  "dependencyOf": string[],
  "dependencies": string[]
}

export interface StatsModel {
    "compiler": {
      "name": string,
      "version": string
    },
    "app": {
      "namespace": string,
      "fsNamespace": string,
      "components": number,
      "entries": number,
      "bundles": number
    },
    "options": {
      "minifyJs": boolean,
      "minifyCss": boolean,
      "hashFileNames": boolean,
      "hashedFileNameLength": number,
      "buildEs5": boolean
    },
    "components": ComponentStatsModel[],
    "entries": {
      "entryId": string,
      "components": ComponentStatsModel[],
      "bundles": string[],
      "inputs": string[],
      "modes": string[],
      "encapsulations": string[]
    }[],
    "sourceGraph": {[file: string]: string[]},
    "collections": string[]
}

export interface State {
    ready: boolean,
    package: PackageModel,
    collection: CollectionModel,
    documentation: DocumentationModel,
    coverage: CoverageModel,
    stats: StatsModel,
    loader: Load
}

export default createProviderConsumer<State>({
    ready: false,
    package: undefined,
    collection: undefined,
    documentation: undefined,
    coverage: undefined,
    stats: undefined,
    loader: undefined,
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);

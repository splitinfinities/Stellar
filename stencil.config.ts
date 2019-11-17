import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import designTokenFunction from "postcss-design-token-function";
import { colors } from "./src/utils/colors";

export const config: Config = {
  namespace: 'stellar-core',
  preamble: '(C) Split Infinities https://splitinfinities.com - MIT License',
  globalStyle: "./src/global/css/stellar.css",
  testing: {
    emulate: [
      // { device: "iPad" },
      // { device: "iPad landscape" },
      // { device: "iPhone 8" },
      // { device: "iPhone SE" },
      // { device: "iPhone X" },
      // { device: "Pixel 2" },
      // { viewport: { width: 320, height: 640 } },
      // { viewport: { width: 720, height: 1000 } },
      { viewport: { width: 1400, height: 1200 } }
    ],
    verbose: false,
    collectCoverage: true,
    notify: true,
    coverageDirectory: "./src/data/tests/",
    // coverageThreshold: {
    //   global: {
    //     branches: 90,
    //     functions: 80,
    //     lines: 80,
    //     statements: -1000
    //   }
    // },
    coverageReporters: [
      "json-summary",
      "text",
    ]
  },
  outputTargets: [
    {
      type: 'dist',
      copy: [
        {
          src: '../dist/collection/collection-manifest.json',
          dest: '../../src/data/collection.json'
        },
        {
          src: '../package.json',
          dest: '../../src/data/version.json'
        },
        {
          src: '../src/data',
          dest: './data'
        },
      ],
    },
    { type: "stats", file: "./src/data/stats.json" },
    { type: "docs-json", file: "./src/data/documentation.json" },
    { type: "docs-readme" },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        {
          src: 'svg',
          dest: './build/svg/',
          warn: true
        },
        {
          src: '../dist/collection/collection-manifest.json',
          dest: '../../src/data/collection.json',
          warn: true
        },
        {
          src: '../package.json',
          dest: '../../src/data/version.json',
          warn: true
        },
        {
          src: '../src/data',
          dest: './build/data',
          warn: true
        },
        {
          src: "global/**/*",
          warn: true
        },
        {
          src: "*.html",
          warn: true
        },
      ],
    }
  ],
  plugins: [
    // @ts-ignore
    postcss({
      plugins: [
        designTokenFunction({
          name: "color",
          data: colors,
          base: 0,
        })
      ]
    })
  ]
};

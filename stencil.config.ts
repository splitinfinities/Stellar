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
    coverageDirectory: "./dist/data/tests/",
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
    { type: 'dist' },
    { type: "stats", file: "./dist/data/stats.json" },
    { type: "docs-json", file: "./dist/data/documentation.json" },
    { type: "docs-readme" },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
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

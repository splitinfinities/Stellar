import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import designTokenFunction from "postcss-design-token-function";
import { generateJsonDocs } from "./src/customElementDocGenerator";
import { colors } from "./src/utils/colors";

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx", "./src/index.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  namespace: 'stellar',
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
    { type: "docs-readme" },
    { type: "docs-vscode", file: "docs-vscode.json" },
    { type: "docs-json", file: "docs-json.json" },
    {
      type: "custom",
      generator: generateJsonDocs,
      name: "custom-element-docs"
    },
    {
      type: 'www',
      serviceWorker: null,
      dir: "storybook-static",
      copy: [
        { src: "global/**/*" },
        { src: "*.html" },
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
        }),
        require("tailwindcss")("./tailwind.config.js"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production"
          ? [purgecss, require("cssnano")]
          : []),
      ]
    })
  ]
};

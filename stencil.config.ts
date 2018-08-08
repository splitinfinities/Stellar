import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import customMedia from "postcss-custom-media";
import * as designTokenFunction from "postcss-design-token-function";
import colors from "./src/global/_colors";
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'Stellar',
  preamble: '(C) Split Infinities https://splitinfinities.com - MIT License',
  globalStyle: "./src/global/stellar.css",
  copy: [
    { src: "global/fonts" },
    { src: "global/images" },
    { src: "global/video" },
    { src: "global/vector" },
    { src: "*.html" },
    { src: "**/*.md" },
    { src: "data" },
  ],
  outputTargets: [
    { type: "stats", file: "/data/stats.json" },
    { type: "docs", jsonFile: "/data/documentation.json" },
    { type: "www" },
    { type: "dist" }
  ],
  plugins: [
    postcss({
      plugins: [
        designTokenFunction({
          name: "color",
          data: colors,
          base: 0,
        })
      ]
    }),
    sass()
  ]
};

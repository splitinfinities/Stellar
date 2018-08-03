import { Config } from '@stencil/core';
import { postcss } from "@stencil/postcss";
import customMedia from "postcss-custom-media";
import designTokenFunction from "postcss-design-token-function";
import { colors } from "./src/global/colors";
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stellar',
  globalStyle: "./src/global/stellar.css",
  copy: [
    { src: "global/fonts" },
    { src: "global/images" },
    { src: "global/video" },
    { src: "global/vector" },
    { src: "*.html" },
    { src: "**/*.md" },
    { src: "documentation.json" },
  ],
  outputTargets:[
    { type: "stats", file: "/src/stats.json" } as ,
    { type: "docs", file: "/src/documentation.json" },
    { type: "dist" },
    { type: "www", serviceWorker: false }
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

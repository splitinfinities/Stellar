const postcss = require("@stencil/postcss");
const customMedia = require("postcss-custom-media");
const designTokenFunction = require("postcss-design-token-function");
const colors = require("./src/global/_colors");
const sass = require('@stencil/sass');

const customMediaArgs = {
  extensions: {
    "--breakpoint-not-small": "screen and (min-width: 30em)",
    "--breakpoint-medium": "screen and (min-width: 30em) and (max-width: 60em)",
    "--breakpoint-large": "screen and (min-width: 60em)"
  }
}

exports.config = {
  namespace: "stellar",
  globalStyle: "./src/global/stellar.css",
  copy: [
    { src: "global/fonts" },
    { src: "global/images" },
    { src: "global/vector" },
    { src: "*.html" },
    { src: "**/*.md" },
    { src: "stats.json" },
    { src: "documentation.json" },
  ],
  outputTargets:[
    { type: "stats", file: "./src/stats.json" },
    { type: "docs", jsonFile: "/src/documentation.json" },
    { type: "dist" },
    { type: "www", serviceWorker: true }
  ],
  plugins: [
    postcss({
      plugins: [
        customMedia(customMediaArgs),
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

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
}

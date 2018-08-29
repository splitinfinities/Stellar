import * as c from './_colors.js';
let color = c;

if (window) {
  color = window["exports"]["default"]
}

export const colors = color;

import {
  configure,
  addDecorator,
  setCustomElements
} from "@storybook/web-components";

import customElements from "../custom-elements.json";

setCustomElements(customElements);

import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withKnobs);
addDecorator(withA11y);

const req = require.context("../src/components", true, /.stories.(tsx|mdx)$/);

configure(req, module);

if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}

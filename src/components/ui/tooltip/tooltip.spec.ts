import { Tooltip } from './tooltip';

it('should render and respond to changes appropriately', () => {
  const tooltip = new Tooltip();

  expect(tooltip.align).toBe("center");

  const rendered = tooltip.render();

  const snapshot = {"$attrs$": {"class": "wrap"}, "$children$": [{"$attrs$": {"class": "after"}, "$children$": null, "$elm$": null, "$flags$": 0, "$key$": null, "$name$": null, "$tag$": "div", "$text$": null}, {"$attrs$": null, "$children$": null, "$elm$": null, "$flags$": 0, "$key$": null, "$name$": null, "$tag$": "slot", "$text$": null}], "$elm$": null, "$flags$": 0, "$key$": null, "$name$": null, "$tag$": "div", "$text$": null}

  expect(rendered).toEqual(snapshot)
});

import { newSpecPage } from '@stencil/core/testing';
import { Item } from './item';

describe('stellar-item', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Item],
      html: `<stellar-item></stellar-item>`,
    });
    expect(page.root).toEqualHtml(`
       
    `);
  });
})

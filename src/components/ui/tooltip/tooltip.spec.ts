import { Tooltip } from './tooltip';

it('should render and respond to changes appropriately', () => {
  const tooltip = new Tooltip();

  expect(tooltip.align).toBe("center");

  const rendered = tooltip.render();

  const snapshot = {"$attrs$": {"class": "wrap"}, "$children$": [{"$attrs$": {"class": "after"}, "$children$": null, "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": "div", "$text$": undefined}, {"$attrs$": null, "$children$": null, "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": "slot", "$text$": undefined}], "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": "div", "$text$": undefined}

  expect(rendered).toEqual(snapshot)
});

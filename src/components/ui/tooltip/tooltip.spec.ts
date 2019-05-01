import { Tooltip } from './tooltip';

it('should render and respond to changes appropriately', () => {
  const tooltip = new Tooltip();

  expect(tooltip.align).toBe("center");

  const rendered = tooltip.render();

  const snapshot = {"elm": undefined, "ishost": false, "vattrs": {"class": "wrap"}, "vchildren": [{"elm": undefined, "ishost": false, "vattrs": {"class": "after"}, "vchildren": null, "vkey": undefined, "vname": undefined, "vtag": "div", "vtext": undefined}, {"elm": undefined, "ishost": false, "vattrs": null, "vchildren": null, "vkey": undefined, "vname": undefined, "vtag": "slot", "vtext": undefined}], "vkey": undefined, "vname": undefined, "vtag": "div", "vtext": undefined}

  expect(rendered).toEqual(snapshot)
});

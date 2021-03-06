import { Asset } from './asset';

it('should render and respond to changes appropriately', () => {
  const asset = new Asset();

  expect(asset.name).toBe("person");

  asset.name = "ios-create"
  asset.componentWillLoad()

  expect(asset.ariaLabel).toBe("create");

  let rendered = asset.render();

  expect(rendered["$children$"][0]["$attrs$"]).toEqual({"aria-label": "create", "ariaLabel": "create", "name": "ios-create", "src": undefined});

  expect(rendered["$children$"][0]["$name$"]).toEqual("ios-create");

  asset.name = undefined;
  asset.src = "awesome";

  rendered = asset.render();

  expect(rendered["$children$"][0]["$attrs$"]).toEqual({"aria-label": "create", "ariaLabel": "create", "name": undefined, "src": "awesome"});

  expect(rendered["$children$"][0]["$name$"]).toEqual(null);
});

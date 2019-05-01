import { Asset } from './asset';

it('should render and respond to changes appropriately', () => {
  const asset = new Asset();

  expect(asset.name).toBe("person");

  asset.name = "ios-create"
  asset.componentWillLoad()

  expect(asset.ariaLabel).toBe("create");

  let rendered = asset.render();

  expect(rendered["vchildren"][0]["vattrs"]).toEqual({"aria-label": "create", "ariaLabel": "create", "name": "ios-ios-create", "src": undefined});

  expect(rendered["vchildren"][0]["vname"]).toEqual("ios-ios-create");
  expect(rendered["vchildren"][0]["src"]).toEqual(undefined);

  asset.name = undefined;
  asset.src = "awesome";

  rendered = asset.render();

  expect(rendered["vchildren"][0]["vattrs"]).toEqual({"aria-label": "create", "ariaLabel": "create", "name": undefined, "src": "awesome"});

  expect(rendered["vchildren"][0]["vname"]).toEqual(undefined);
  expect(rendered["vchildren"][0]["src"]).toEqual(undefined);
});

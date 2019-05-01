import { Breadcrumbs } from './breadcrumbs';

it('should render and respond to changes appropriately', () => {
  const breadcrumbs = new Breadcrumbs();

  expect(breadcrumbs.name).toBe("person");

  breadcrumbs.name = "ios-create"
  breadcrumbs.componentWillLoad()

  expect(breadcrumbs.ariaLabel).toBe("create");

  let rendered = breadcrumbs.render();

  expect(rendered["vchildren"][0]["vattrs"]).toEqual({"aria-label": "create", "ariaLabel": "create", "name": "ios-ios-create", "src": undefined});

  expect(rendered["vchildren"][0]["vname"]).toEqual("ios-ios-create");
  expect(rendered["vchildren"][0]["src"]).toEqual(undefined);

  breadcrumbs.name = undefined;
  breadcrumbs.src = "awesome";

  rendered = breadcrumbs.render();

  expect(rendered["vchildren"][0]["vattrs"]).toEqual({"aria-label": "create", "ariaLabel": "create", "name": undefined, "src": "awesome"});

  expect(rendered["vchildren"][0]["vname"]).toEqual(undefined);
  expect(rendered["vchildren"][0]["src"]).toEqual(undefined);
});

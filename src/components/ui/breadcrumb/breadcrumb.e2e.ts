import { Breadcrumb } from './breadcrumb';

it('should render and respond to changes appropriately', () => {
  const breadcrumb = new Breadcrumb();

  expect(breadcrumb.name).toBe("person");

  breadcrumb.name = "ios-create"
  breadcrumb.componentWillLoad()

  expect(breadcrumb.ariaLabel).toBe("create");

  let rendered = breadcrumb.render();

  expect(rendered["vchildren"][0]["vattrs"]).toEqual({"aria-label": "create", "ariaLabel": "create", "name": "ios-ios-create", "src": undefined});

  expect(rendered["vchildren"][0]["vname"]).toEqual("ios-ios-create");
  expect(rendered["vchildren"][0]["src"]).toEqual(undefined);

  breadcrumb.name = undefined;
  breadcrumb.src = "awesome";

  rendered = breadcrumb.render();

  expect(rendered["vchildren"][0]["vattrs"]).toEqual({"aria-label": "create", "ariaLabel": "create", "name": undefined, "src": "awesome"});

  expect(rendered["vchildren"][0]["vname"]).toEqual(undefined);
  expect(rendered["vchildren"][0]["src"]).toEqual(undefined);
});

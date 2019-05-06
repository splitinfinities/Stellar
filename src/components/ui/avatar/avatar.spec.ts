import { Avatar } from './avatar';

it('should render and respond to changes appropriately', () => {
  const avatar = new Avatar();

  expect(avatar.name).toBe("Stellar");
  expect(avatar.initials).toBe("ST");
  expect(avatar.color).toBe("auto");
  expect(avatar.colors).toBe(undefined);

  avatar.componentWillLoad()

  expect(avatar.colors.length).toEqual(14);

  avatar.name = "William M. Riley";
  avatar.formatName();

  expect(avatar.name).toBe("William M. Riley");
  expect(avatar.initials).toBe("WM");
  expect(avatar.color).toBe("red");

  avatar.color = "#333333";

  expect(avatar.color).toBe("#333333");

  avatar.shape = "star";
  avatar.formatName()

  expect(avatar.initials).toBe("W");

  avatar.shape = "circle";
  avatar.size = "tiny";
  avatar.formatName()

  expect(avatar.initials).toBe("W");

  avatar.name = "";
  avatar.formatName()

  expect(avatar.initials).toBe("ST");

  avatar.processing = true;
  avatar.formatName()

  expect(avatar.initials).toBe("");

  const rendered = avatar.render();



  const snapshot = {"$attrs$": {"class": "theme-black-alt"}, "$children$": [{"$attrs$": {"class": "wrapper", "title": "You tabbed on an Avatar for "}, "$children$": [{"$attrs$": {"class": "processing"}, "$children$": [{"$attrs$": {"src": "Loading"}, "$children$": null, "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": "stellar-avatar", "$text$": undefined}], "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": "div", "$text$": undefined}, {"$attrs$": {"class": "content"}, "$children$": [{"$attrs$": {"class": "spacer"}, "$children$": null, "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": "div", "$text$": undefined}, {"$attrs$": {"class": "letter", "title": ""}, "$children$": [{"$flags$": 0, "$text$": ""}], "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": "div", "$text$": undefined}, {"$flags$": 0, "$text$": ""}], "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": "div", "$text$": undefined}, {"$flags$": 0, "$text$": ""}], "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": "button", "$text$": undefined}], "$elm$": undefined, "$flags$": 0, "$key$": undefined, "$name$": undefined, "$tag$": {}, "$text$": undefined}

  expect(rendered).toEqual(snapshot);
});

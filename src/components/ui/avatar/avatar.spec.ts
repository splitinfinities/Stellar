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

  const snapshot = {"elm": undefined, "ishost": false, "vattrs": {"class": "wrapper", "title": "You tabbed on an Avatar for "}, "vchildren": [{"elm": undefined, "ishost": false, "vattrs": {"class": "processing"}, "vchildren": [{"elm": undefined, "ishost": false, "vattrs": {"src": "Loading"}, "vchildren": null, "vkey": undefined, "vname": undefined, "vtag": "stellar-avatar", "vtext": undefined}], "vkey": undefined, "vname": undefined, "vtag": "div", "vtext": undefined}, {"elm": undefined, "ishost": false, "vattrs": {"class": "content"}, "vchildren": [{"elm": undefined, "ishost": false, "vattrs": {"class": "spacer"}, "vchildren": null, "vkey": undefined, "vname": undefined, "vtag": "div", "vtext": undefined}, {"elm": undefined, "ishost": false, "vattrs": {"class": "letter", "title": ""}, "vchildren": [{"vtext": ""}], "vkey": undefined, "vname": undefined, "vtag": "div", "vtext": undefined}, {"vtext": ""}], "vkey": undefined, "vname": undefined, "vtag": "div", "vtext": undefined}, {"vtext": ""}], "vkey": undefined, "vname": undefined, "vtag": "button", "vtext": undefined}

  expect(rendered).toEqual(snapshot);
});

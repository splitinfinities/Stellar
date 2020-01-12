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
  expect(avatar.initials).toBe("W");
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
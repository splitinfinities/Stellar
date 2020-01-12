import { CopyWrap } from './copy-wrap';

it('should render and respond to changes appropriately', () => {
  const copyWrap = new CopyWrap();

  expect(copyWrap.align).toBe("left");
  expect(copyWrap.full).toBe(false);
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
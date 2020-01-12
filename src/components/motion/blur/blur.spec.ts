import { Blur } from './blur';

it('should render and respond to changes appropriately', () => {
  const blur = new Blur();

  expect(blur.vertical).toBe(0);
  expect(blur.horizontal).toBe(0);

  blur.vertical = 10;
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
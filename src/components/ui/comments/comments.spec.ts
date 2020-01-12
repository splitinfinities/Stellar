import { Comments } from './comments';

it('should render and respond to changes appropriately', () => {
  const comments = new Comments();
  expect(comments).toBeInstanceOf(Comments);
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
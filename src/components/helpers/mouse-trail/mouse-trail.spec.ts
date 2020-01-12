import { StellarMouseTrail } from './mouse-trail';

describe('mouse-trail', () => {
  it('builds', () => {
    expect(new StellarMouseTrail()).toBeTruthy();
  });
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
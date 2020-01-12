import { newSpecPage } from '@stencil/core/testing';
import { StellarAutoScroll } from './auto-scroll';

describe('stellar-auto-scroll', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [StellarAutoScroll],
      html: `<stellar-auto-scroll></stellar-auto-scroll>`,
    });
    expect(page.root).toEqualHtml(`
      <stellar-auto-scroll></stellar-auto-scroll>
    `);
  });
})
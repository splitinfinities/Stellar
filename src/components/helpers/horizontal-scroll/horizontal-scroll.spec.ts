import { newSpecPage } from '@stencil/core/testing';
import { HorizontalScroll } from './horizontal-scroll';

describe('stellar-horizontal-scroll', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [HorizontalScroll],
      html: `<stellar-horizontal-scroll></stellar-horizontal-scroll>`,
    });
    expect(page.root).toEqualHtml(`
       <stellar-horizontal-scroll></stellar-horizontal-scroll>
    `);
  });
})
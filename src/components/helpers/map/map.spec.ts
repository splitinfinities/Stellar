import { newSpecPage } from '@stencil/core/testing';
import { Map } from './map';

describe('stellar-map', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Map],
      html: `<stellar-map></stellar-map>`,
    });
    expect(page.root).toEqualHtml(`
       <stellar-map></stellar-map>
    `);
  });
})
import { newSpecPage } from '@stencil/core/testing';
import { Marker } from './marker';

describe('stellar-map-marker', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Marker],
      html: `<stellar-map-marker></stellar-map-marker>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-map-marker></stellar-map-marker>
    `);
  });
})
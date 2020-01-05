import { newE2EPage } from '@stencil/core/testing';

describe('stellar-google-maps-marker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stellar-google-maps-marker></stellar-google-maps-marker>');

    const element = await page.find('stellar-google-maps-marker');
    expect(element).toHaveClass('hydrated');
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('stellar-interstitial', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stellar-interstitial></stellar-interstitial>');

    const element = await page.find('stellar-interstitial');
    expect(element).toHaveClass('hydrated');
  });
});

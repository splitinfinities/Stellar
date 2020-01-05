import { newE2EPage } from '@stencil/core/testing';

describe('stellar-google-maps', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stellar-google-maps></stellar-google-maps>');

    const element = await page.find('stellar-google-maps');
    expect(element).toHaveClass('hydrated');
  });
});

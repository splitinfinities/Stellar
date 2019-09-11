import { newE2EPage } from '@stencil/core/testing';

describe('stellar-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stellar-clock></stellar-clock>');

    const element = await page.find('stellar-clock');
    expect(element).toHaveClass('hydrated');
  });
});

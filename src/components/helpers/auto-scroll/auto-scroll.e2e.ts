import { newE2EPage } from '@stencil/core/testing';

describe('stellar-auto-scroll', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stellar-auto-scroll></stellar-auto-scroll>');

    const element = await page.find('stellar-auto-scroll');
    expect(element).toHaveClass('hydrated');
  });
});

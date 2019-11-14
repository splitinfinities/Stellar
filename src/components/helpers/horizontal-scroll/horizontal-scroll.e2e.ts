import { newE2EPage } from '@stencil/core/testing';

describe('horizontal-scroll', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<horizontal-scroll></horizontal-scroll>');

    const element = await page.find('horizontal-scroll');
    expect(element).toHaveClass('hydrated');
  });
});

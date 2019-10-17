import { newE2EPage } from '@stencil/core/testing';

describe('stellar-pjax', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stellar-pjax></stellar-pjax>');

    const element = await page.find('stellar-pjax');
    expect(element).toHaveClass('hydrated');
  });
});

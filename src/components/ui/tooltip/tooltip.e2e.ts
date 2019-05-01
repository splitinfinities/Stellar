import { newE2EPage } from '@stencil/core/testing';

describe('stellar-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-tooltip></stellar-tooltip>');
    const element = await page.find('stellar-tooltip');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });
});

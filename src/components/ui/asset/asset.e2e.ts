import { newE2EPage } from '@stencil/core/testing';

describe('stellar-asset', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-asset></stellar-asset>');
    const element = await page.find('stellar-asset');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });
});

import { newE2EPage } from '@stencil/core/testing';

describe('stellar-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-grid><stellar-card></stellar-card><stellar-card></stellar-card><stellar-card></stellar-card><stellar-card></stellar-card></stellar-grid>');
    const element = await page.find('stellar-grid');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });
});

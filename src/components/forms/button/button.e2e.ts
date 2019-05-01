import { newE2EPage } from '@stencil/core/testing';

describe('stellar-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-button></stellar-button>');
    const element = await page.find('stellar-button');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-button></stellar-button>');
    const element = await page.find('stellar-button >>> div');
    expect(element.textContent).toEqual(`Submit`);

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });
});

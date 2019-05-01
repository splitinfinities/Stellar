import { newE2EPage } from '@stencil/core/testing';

describe('stellar-callout', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-callout></stellar-callout>');
    const element = await page.find('stellar-callout');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });

  it('renders changes to the type', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-callout type="error"><p>Oh god no why!</p></stellar-callout>');
    const element = await page.find('stellar-callout');
    expect(element.getAttribute('aria-label')).toEqual(`An error message. Oh god no why!`);
    expect(element.getAttribute('aria-role')).toEqual(`status`);
    expect(element.getAttribute('tabindex')).toEqual('0');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
  });
});

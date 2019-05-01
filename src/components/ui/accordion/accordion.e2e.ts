import { newE2EPage } from '@stencil/core/testing';
import {renderToSketch} from '../../utils/test'

describe('stellar-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(`<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-accordion>
      <p slot="label">Title <stellar-tag size='tiny'>New</stellar-tag></p>
        <h1>Content!</h1>
        <h2>Hello!</h2>
      </stellar-accordion>
      <stellar-accordion open>
      <p slot="label">Title <stellar-tag size='tiny'>New</stellar-tag></p>
        <h1>Content!</h1>
        <h2>Hello!</h2>
      </stellar-accordion>
    `);
    const element = await page.find('stellar-accordion');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
    await renderToSketch(page, "site", "default")
  });
});

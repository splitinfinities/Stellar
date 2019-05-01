import { newE2EPage } from '@stencil/core/testing';
import {renderToSketch} from '../../utils/test'

describe('stellar-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setViewport({ width: 1200, height: 1200});

    await page.setContent(`<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" />
    <stellar-layout>
        <section><stellar-card></stellar-card></section>
        <aside><stellar-card></stellar-card></aside>
    </stellar-layout>`);
    const element = await page.find('stellar-layout');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "layout", "default")
  });

  it('renders as a sidebar', async () => {
    const page = await newE2EPage();

    await page.setViewport({width: 1200, height: 1200})

    await page.setContent(`<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" />
    <stellar-layout type="sidebar">
        <section>
            <stellar-card></stellar-card>
        </section>
        <aside>
            <stellar-card></stellar-card>
        </aside>
    </stellar-layout>`);

    const element = await page.find('stellar-layout');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "layout", "sidebar")
  });
});

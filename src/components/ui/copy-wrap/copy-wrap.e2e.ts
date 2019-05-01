import { newE2EPage } from '@stencil/core/testing';
import {renderToSketch} from '../../utils/test'

describe('copy-wrap', () => {
  it('renders normally', async () => {
    const page = await newE2EPage();

    await page.setContent(`<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" />
        <copy-wrap>
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
    await renderToSketch(page, "copy-wrap", "default")
  });

  it('renders theme', async () => {
    const page = await newE2EPage();

    await page.setContent(`<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" />
        <copy-wrap class="bg-theme-base5">
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
    await renderToSketch(page, "copy-wrap", "theme")
  });

  it('renders dark', async () => {
    const page = await newE2EPage();

    await page.setContent(`<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" />
        <copy-wrap class="bg-theme-base9 dark-mode">
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
    await renderToSketch(page, "copy-wrap", "dark")
  });

  it('renders light', async () => {
    const page = await newE2EPage();

    await page.setContent(`<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" />
        <copy-wrap class="bg-theme-base0 light-mode">
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
    await renderToSketch(page, "copy-wrap", "light")
  });

  it('renders on contrasting colors', async () => {
    const page = await newE2EPage();

    await page.setContent(`<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" />
    <div class="theme-indigo bg-theme-base9">
        <copy-wrap class="theme-red dark-mode">
            <h1>Heading</h1>
            <h2>Heading</h2>
            <h3>Heading</h3>
            <h4>Heading</h4>
            <h5>Heading</h5>
            <h6>Heading</h6>
            <p>Paragraph</p>
        </copy-wrap>
    </div>
    `);
    const element = await page.find('copy-wrap');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
    await renderToSketch(page, "copy-wrap", "contrasting")
  });
});

import { newE2EPage } from '@stencil/core/testing';
import {renderToSketch} from '../../utils/test'

describe('stellar-blur', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-blur><h1>Awesome!</h1></stellar-blur>');
    const element = await page.find('stellar-blur');
    expect(element).toHaveClass('hydrated');
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()
    await renderToSketch(page, "blur", "default")
  });

  it('Blurs content vertically', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-blur vertical="10"><h1>Awesome!</h1></stellar-blur>');
    const element = await page.find('stellar-blur');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "blur", "vertical")
  });

  it('Blurs content horizontally', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-blur horizontal="10"><h1>Awesome!</h1></stellar-blur>');
    const element = await page.find('stellar-blur');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "blur", "horizontal")
  });

  it('Blurs content in both directions', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-blur horizontal="10" vertical="10"><h1>Awesome!</h1></stellar-blur>');
    const element = await page.find('stellar-blur');
    expect(element).toHaveClass('hydrated');

    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "blur", "both")
  });

});

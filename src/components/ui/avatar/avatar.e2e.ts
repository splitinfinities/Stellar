import { newE2EPage } from '@stencil/core/testing';
import {renderToSketch} from '../../utils/test'

describe('stellar-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-avatar size="small"></stellar-avatar>');
    const element = await page.find('stellar-avatar');
    expect(element).toHaveClass('hydrated');
    await renderToSketch(page, "avatar", "default")
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100, allowableMismatchedRatio: 0.2 })

  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-avatar name="William M. Riley"></stellar-avatar>');
    const element = await page.find('stellar-avatar >>> div.letter');
    expect(element.textContent).toEqual(`WM`);

    await renderToSketch(page, "avatar", "name")
  });

  it('renders avatar colors', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-avatar name="William M. Riley" color="red"></stellar-avatar><stellar-avatar name="William M. Riley" color="orange"></stellar-avatar><stellar-avatar name="William M. Riley" color="yellow"></stellar-avatar><stellar-avatar name="William M. Riley" color="lime"></stellar-avatar><stellar-avatar name="William M. Riley" color="green"></stellar-avatar><stellar-avatar name="William M. Riley" color="cyan"></stellar-avatar><stellar-avatar name="William M. Riley" color="blue"></stellar-avatar><stellar-avatar name="William M. Riley" color="indigo"></stellar-avatar><stellar-avatar name="William M. Riley" color="violet"></stellar-avatar></stellar-avatar><stellar-avatar name="William M. Riley" color="gray"></stellar-avatar>');
    await page.waitForChanges();
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "avatar", "colors")
  });

  it('renders avatar sizes', async () => {
    const page = await newE2EPage();

    await page.setContent('<link href="http://localhost:3333/build/stellar-core.css" rel="stylesheet" /><stellar-avatar name="William M. Riley" size="tiny"></stellar-avatar><stellar-avatar name="William M. Riley" size="small"></stellar-avatar><stellar-avatar name="William M. Riley" size="medium"></stellar-avatar><stellar-avatar name="William M. Riley" size="large"></stellar-avatar>');
    await page.waitForChanges();
    const results = await page.compareScreenshot();
    expect(results).toMatchScreenshot()

    await renderToSketch(page, "avatar", "sizes")
  });
});

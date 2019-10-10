import { newE2EPage } from '@stencil/core/testing';

describe('stellar-mouse-trail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stellar-mouse-trail></stellar-mouse-trail>');

    const element = await page.find('stellar-mouse-trail');
    expect(element).toHaveClass('hydrated');
  });
});

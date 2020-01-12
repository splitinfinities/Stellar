import { newSpecPage } from '@stencil/core/testing';
import { StellarMouseTrail } from './mouse-trail';

describe('stellar-mouse-trail', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [StellarMouseTrail],
      html: `<stellar-mouse-trail><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /></stellar-mouse-trail>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-mouse-trail>
        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\">
      </stellar-mouse-trail>
    `);
  });
})
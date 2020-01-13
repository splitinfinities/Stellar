import { newSpecPage } from '@stencil/core/testing';
import { Comments } from './comments';

describe('stellar-comments', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Comments],
      html: `<stellar-comments></stellar-comments>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-comments>
        <mock:shadow-root>
          <section>
            <slot></slot>
          </section>
        </mock:shadow-root>
      </stellar-comments>
    `);
  });
})
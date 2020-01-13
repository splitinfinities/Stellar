import { newSpecPage } from '@stencil/core/testing';
import { Content } from './content';

describe('stellar-content', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Content],
      html: `<stellar-content></stellar-content>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-content>
        <mock:shadow-root>
          <div aria-hidden=\"true\" class=\"wrap\" role=\"tabpanel\">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </stellar-content>
    `);
  });
})
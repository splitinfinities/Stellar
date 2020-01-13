import { newSpecPage } from '@stencil/core/testing';
import { CopyWrap } from './copy-wrap';

describe('copy-wrap', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [CopyWrap],
      html: `<copy-wrap></copy-wrap>`,
    });

    expect(page.root).toEqualHtml(`
      <copy-wrap align=\"left\">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </copy-wrap>
    `);

    expect(page.root.align).toBe("left");
    expect(page.root.full).toBe(false);
  });
})
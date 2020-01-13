import { newSpecPage } from '@stencil/core/testing';
import { Tooltip } from './tooltip';

describe('stellar-tooltip', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Tooltip],
      html: `<stellar-tooltip></stellar-tooltip>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-tooltip align=\"center\">
        <mock:shadow-root>
          <div class=\"wrap\">
            <div class=\"after\"></div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </stellar-tooltip>
    `);
  });
})

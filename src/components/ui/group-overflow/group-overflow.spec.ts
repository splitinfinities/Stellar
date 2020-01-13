import { newSpecPage } from '@stencil/core/testing';
import { GroupOverflow } from './group-overflow';

describe('stellar-group-overflow', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [GroupOverflow],
      html: `<stellar-group-overflow></stellar-group-overflow>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-group-overflow size=\"medium\">
        <mock:shadow-root>
          <div class=\"wrapper\">
            <div class=\"content\">
              <div class=\"count\"> + more</div>
              <div class=\"spacer\"></div>          
            </div>          
            <stellar-tooltip>
              <slot></slot>
            </stellar-tooltip>
          </div>
        </mock:shadow-root>
      </stellar-group-overflow>
    `);
  });
})
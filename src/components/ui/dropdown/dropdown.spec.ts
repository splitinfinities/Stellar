import { newSpecPage } from '@stencil/core/testing';
import { Dropdown } from './dropdown';

describe('stellar-dropdown', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Dropdown],
      html: `<stellar-dropdown></stellar-dropdown>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-dropdown aria-label=\"Dropdown\" class=\"dropdown\" position=\"center\" title=\"Dropdown\">
        <mock:shadow-root>
          <div class=\"toggle\">
            <slot name=\"handle\"></slot>
          </div>
          <div class=\"clipper\">
            <div class=\"list-wrap\">
              <ul class=\"list\">
                <slot></slot>
              </ul>
            </div>
          </div>
        </mock:shadow-root>
      </stellar-dropdown>
    `);
  });
})

import { newSpecPage } from '@stencil/core/testing';
import { Accordion } from './accordion';

describe('stellar-accordion', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Accordion],
      html: `<stellar-accordion></stellar-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <stellar-accordion style=\"--accordion-height: undefinedpx;\">
        <mock:shadow-root>
          <div class=\"wrap\">
            <div class=\"button-wrap\" title=\"Selecting this opens the content of this accordion\">
              <slot name=\"label\">
                <stellar-button ghost=\"\" id=\"button\" label=\"More Details\" tag=\"button\">
                  More Details
                </stellar-button>
              </slot>
              <stellar-asset class=\"chevron\" name=\"arrow-down\"></stellar-asset>
            </div>
            <stellar-blur vertical=\"0\">
              <div class=\"expander\" tabindex=\"-1\">
                <slot></slot>
              </div>
            </stellar-blur>
          </div>
        </mock:shadow-root>
      </stellar-accordion>
    `);
  });
})
import { newSpecPage } from '@stencil/core/testing';
import { Card } from './card';

describe('stellar-card', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<stellar-card noresize></stellar-card>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-card noresize=\"\" padding=\"medium\">
        <mock:shadow-root>
          <div anchorclass=\"\" class=\"wrap\" href=\"#\" url=\"#\" value=\"#\">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </stellar-card>
    `);
  });

  it('should renders as a flippable card', async () => {
    const page = await newSpecPage({
      components: [Card],
      html: `<stellar-card noresize flippable></stellar-card>`,
    });

    expect(page.root).toEqualHtml(`
      <stellar-card flippable=\"\" noresize=\"\" padding=\"medium\">
        <mock:shadow-root>
          <div anchorclass=\"\" class=\"wrap\" href=\"#\" url=\"#\" value=\"#\">
            <stellar-button class=\"flip-button\" ghost=\"\" tag=\"button\">
              <stellar-asset class=\"ma0\" name=\"cog\"></stellar-asset>
            </stellar-button>
            <div class=\"front\">
              <slot></slot>
            </div>
            <div class=\"back\">
              <slot name=\"back\"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </stellar-card>
    `);
  });
})
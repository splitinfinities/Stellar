import { newSpecPage } from '@stencil/core/testing';
import { Item } from './item';

describe('stellar-item', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Item],
            html: `<stellar-item></stellar-item>`,
        });
        expect(page.root).toEqualHtml(`
        <stellar-item href=\"#\" type=\"button\">
            <mock:shadow-root>
                <button class=\"button\" href=\"#\" tabindex=\"0\" type=\"button\" url=\"#\">
                <div class=\"content\">
                    <slot></slot>
                </div>
                </button>
            </mock:shadow-root>
        </stellar-item>
    `);
    });
})
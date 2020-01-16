import { newSpecPage } from '@stencil/core/testing';
import { Select } from './select';

describe('stellar-select', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Select],
            html: `<stellar-select></stellar-select>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-select name=\"select\">
                <mock:shadow-root>
                    <div class=\"wrapper\">
                    <div class=\"select\">
                        <button class=\"select-title\" type=\"button\">
                        <stellar-item fit=\"\" select-title=\"\" tabindex=\"-1\" type=\"button\" value=\"\" wrap=\"\"></stellar-item>
                        <ion-icon name=\"arrow-down\"></ion-icon>
                        <input name=\"select\" tabindex=\"-1\" type=\"text\">
                        </button>
                        <stellar-blur class=\"select-list\" vertical=\"0\">
                        <div class=\"select-list-header\">
                            <slot name=\"header\"></slot>
                        </div>
                        <div class=\"select-list-body\">
                            <slot></slot>
                        </div>
                        </stellar-blur>
                    </div>
                    <stellar-label size=\"small\" underneath=\"\"></stellar-label>
                    </div>
                </mock:shadow-root>
            </stellar-select>
        `);
    });
})
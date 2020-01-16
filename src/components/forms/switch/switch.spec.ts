import { newSpecPage } from '@stencil/core/testing';
import { Switch } from './switch';

describe('stellar-switch', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Switch],
            html: `<stellar-switch></stellar-switch>`,
        });
        expect(page.root).toEqualHtml(`
            <stellar-switch>
                <label class=\"label\">
                    <input tabindex=\"-1\" type=\"checkbox\">
                    <button type=\"button\">
                        <span>
                            <ion-icon name=\"close\"></ion-icon>
                        </span>
                    </button>
                </label>
            </stellar-switch>
        `);
    });
})
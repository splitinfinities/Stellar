import { newSpecPage } from '@stencil/core/testing';
import { ToggleOption } from './toggle-option';

describe('stellar-toggle-option', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [ToggleOption],
            html: `<stellar-toggle-option>Awesome</stellar-toggle-option>`,
        });

        expect(page.root).toEqualHtml(`
        <stellar-toggle-option type=\"checkbox\">
            <button type=\"button\">
                <input name=\"[undefined]\" type=\"hidden\" value=\"\">
                <input class=\"input\" id=\"_undefined_undefined\" name=\"[undefined]\" type=\"checkbox\">
                <div class=\"box\">
                    <div class=\"indicator\">
                        <stellar-asset name=\"checkmark\"></stellar-asset>
                    </div>
                </div>
                <p>Awesome</p>
        </button>
        </stellar-toggle-option>
        `);
    });
})
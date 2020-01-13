import { newSpecPage } from '@stencil/core/testing';
import { Step } from './step';

describe('stellar-step', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Step],
            html: `<stellar-step></stellar-step>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-step href=\"#\">
                <button aria-selected=\"false\" class=\"step-button\" role=\"tab\" tabindex=\"0\">
                    <stellar-label>
                    <span class=\"title\"></span>
                    </stellar-label>
                </button>
            </stellar-step>
        `);
    });
})
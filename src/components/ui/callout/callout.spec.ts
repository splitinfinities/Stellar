
import { newSpecPage } from '@stencil/core/testing';
import { Callout } from './callout';

describe('stellar-callout', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Callout],
            html: `<stellar-callout></stellar-callout>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-callout aria-label=\"An default message. \" aria-role=\"status\" class=\"theme-gray\" tabindex=\"0\">
                <mock:shadow-root>
                    <div class=\"callout-wrap\">
                        <slot></slot>
                    </div>
                </mock:shadow-root>
            </stellar-callout>
        `);

        expect(page.root.type).toBe("default");
    });
})
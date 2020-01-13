import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumb } from './breadcrumb';

describe('stellar-breadcrumb', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Breadcrumb],
            html: `<stellar-breadcrumb></stellar-breadcrumb>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-breadcrumb>
                <mock:shadow-root>
                    <a aria-label=\"Breadcrumb link for \" class=\"button\" href=\"/\" target=\"_self\" title=\"Breadcrumb link for \" url=\"/\">
                    <slot></slot>
                    </a>
                </mock:shadow-root>
            </stellar-breadcrumb>
        `);

        expect(page.root.label).toBe("Breadcrumb link for ");
    });
})
import { newSpecPage } from '@stencil/core/testing';
import { Tag } from './tag';

describe('stellar-tag', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Tag],
            html: `<stellar-tag></stellar-tag>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-tag style=\"--background-color: var(--cyan5); --color: var(--white);\">
                <mock:shadow-root>
                    <stellar-label class=\"tag\">
                        <slot></slot>
                    </stellar-label>
                </mock:shadow-root>
            </stellar-tag>
        `);
    });
})
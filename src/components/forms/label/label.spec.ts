import { newSpecPage } from '@stencil/core/testing';
import { Label } from './label';

describe('stellar-label', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Label],
            html: `<stellar-label></stellar-label>`,
        });
        expect(page.root).toEqualHtml(`
        <stellar-label>
            <mock:shadow-root>
                <label>
                    <slot></slot>
                </label>
            </mock:shadow-root>
        </stellar-label>
    `);
    });
})
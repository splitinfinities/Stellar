import { newSpecPage } from '@stencil/core/testing';
import { Toggle } from './toggle';

describe('stellar-toggle', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Toggle],
            html: `<stellar-toggle></stellar-toggle>`,
        });
        expect(page.root).toEqualHtml(`
            <stellar-toggle>
                <div data-type=\"checkbox\"></div>
            </stellar-toggle>
        `);
    });
})
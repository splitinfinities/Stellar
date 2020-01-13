import { newSpecPage } from '@stencil/core/testing';
import { Steps } from './steps';

describe('stellar-steps', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Steps],
            html: `<stellar-steps></stellar-steps>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-steps>
                <div class=\"step-list\" role=\"tablist\"></div>
            </stellar-steps>
        `);
    });
})
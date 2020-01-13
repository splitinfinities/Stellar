import { newSpecPage } from '@stencil/core/testing';
import { Tabs } from './tabs';

describe('stellar-item', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Tabs],
            html: `<stellar-tabs></stellar-tabs>`,
        });

        expect(page.root).toEqualHtml(`
        <stellar-tabs>
            <mock:shadow-root>
                <div class=\"tab-wrap\">
                    <div class=\"tab-list\" role=\"tablist\">
                        <slot></slot>
                        <stellar-blur horizontal=\"0\" vertical=\"0\">
                            <div class=\"indicator\"></div>
                        </stellar-blur>
                    </div>
                </div>
            </mock:shadow-root>
        </stellar-tabs>
        `);
    });
})
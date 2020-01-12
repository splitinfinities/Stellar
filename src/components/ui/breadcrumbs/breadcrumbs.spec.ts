import { Breadcrumbs } from './breadcrumbs';

xit('should render', () => {
    const breadcrumbs = new Breadcrumbs();
    expect(breadcrumbs.label).toBe("Breadcrumb link");
});


import { newSpecPage } from '@stencil/core/testing';
import { Item } from './item';

describe('stellar-item', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Item],
            html: `<stellar-item></stellar-item>`,
        });
        expect(page.root).toEqualHtml(`
       
    `);
    });
})
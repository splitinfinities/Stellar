import { Callout } from './callout';

it('should render', () => {
    const callout = new Callout();
    expect(callout.type).toBe("default");
    expect(callout.theme).toBe("gray");

    callout.type = "error";
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
import { Step } from './step';

it('should render and respond to changes appropriately', () => {
    const step = new Step();
    expect(step).toBeInstanceOf(Step);
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
import { Table } from './table';

it('should render and respond to changes appropriately', () => {
    const table = new Table();
    expect(table).toBeInstanceOf(Table);
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
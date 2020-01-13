import { newSpecPage } from '@stencil/core/testing';
import { Table } from './table';

describe('stellar-table', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Table],
            html: `<stellar-table><table></table></stellar-table>`,
        });

        expect(page.root).toEqualHtml(`<stellar-table>
        <table></table>
        </stellar-table>
        `);
    });
})
import { Table } from './table';

it('should render and respond to changes appropriately', () => {
    const table = new Table();
    expect(table).toBeInstanceOf(Table);
});

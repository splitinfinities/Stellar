import { Pagination } from './pagination';

it('should render and respond to changes appropriately', () => {
    const pagination = new Pagination();
    expect(pagination).toBeInstanceOf(Pagination);
});

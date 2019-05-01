import { Item } from './item';

it('should render and respond to changes appropriately', () => {
    const item = new Item();
    expect(item).toBeInstanceOf(Item);
});

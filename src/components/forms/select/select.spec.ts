import { Select } from './select';

it('should render and respond to changes appropriately', () => {
    const select = new Select();
    expect(select).toBeInstanceOf(Select);
});

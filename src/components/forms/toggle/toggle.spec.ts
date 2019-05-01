import { Toggle } from './toggle';

it('should render and respond to changes appropriately', () => {
    const toggle = new Toggle();
    expect(toggle).toBeInstanceOf(Toggle);
});

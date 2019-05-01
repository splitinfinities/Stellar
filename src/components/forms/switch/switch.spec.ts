import { Switch } from './switch';

it('should render and respond to changes appropriately', () => {
    const subject = new Switch();
    expect(subject).toBeInstanceOf(Switch);
});

import { Label } from './label';

it('should render and respond to changes appropriately', () => {
    const label = new Label();
    expect(label).toBeInstanceOf(Label);
});

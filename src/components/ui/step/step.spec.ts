import { Step } from './step';

it('should render and respond to changes appropriately', () => {
    const step = new Step();
    expect(step).toBeInstanceOf(Step);
});

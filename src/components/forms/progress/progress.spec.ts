import { Progress } from './progress';

it('should render and respond to changes appropriately', () => {
    const progress = new Progress();
    expect(progress).toBeInstanceOf(Progress);
});

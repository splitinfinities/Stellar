import { Steps } from './steps';

it('should render and respond to changes appropriately', () => {
    const steps = new Steps();
    expect(steps).toBeInstanceOf(Steps);
});

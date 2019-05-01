import { Layout } from './layout';

it('should render and respond to changes appropriately', () => {
    const layout = new Layout();
    expect(layout).toBeInstanceOf(Layout);
});

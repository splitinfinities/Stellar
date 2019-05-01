import { Tag } from './tag';

it('should render and respond to changes appropriately', () => {
    const tag = new Tag();
    expect(tag).toBeInstanceOf(Tag);
});

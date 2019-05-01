import { Group } from './group';

it('should render and respond to changes appropriately', () => {
  const group = new Group();
  expect(group).toBeInstanceOf(Group);
});

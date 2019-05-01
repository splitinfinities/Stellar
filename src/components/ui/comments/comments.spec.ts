import { Comments } from './comments';

it('should render and respond to changes appropriately', () => {
  const comments = new Comments();
  expect(comments).toBeInstanceOf(Comments);
});

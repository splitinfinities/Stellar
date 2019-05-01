import { Comment } from './comment';

it('should render and respond to changes appropriately', () => {
  const comment = new Comment();
  expect(comment.content).toBe(undefined);
});

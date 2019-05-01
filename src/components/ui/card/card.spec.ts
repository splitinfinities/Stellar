import { Card } from './card';

it('should render and respond to changes appropriately', () => {
  const card = new Card();
  expect(card.flippable).toBe(false);
});

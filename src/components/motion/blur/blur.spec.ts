import { Blur } from './blur';

it('should render and respond to changes appropriately', () => {
  const blur = new Blur();

  expect(blur.vertical).toBe(0);
  expect(blur.horizontal).toBe(0);

  blur.vertical = 10;
});

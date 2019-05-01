import { Accordion } from './accordion';

it('should render and respond to changes appropriately', () => {
  const accordion = new Accordion();

  expect(accordion.open).toBe(false);

  accordion.handleClick();

  expect(accordion.open).toBe(true);
});

import { Accordion } from './accordion';

xit('should render and respond to changes appropriately', () => {
  const accordion = new Accordion();

  expect(accordion.open).toBe(false);

  accordion.handleClick();

  expect(accordion.open).toBe(true);
});

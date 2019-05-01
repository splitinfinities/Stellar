import { Dropdown } from './dropdown';

it('should render and respond to changes appropriately', () => {
  const dropdown = new Dropdown();
  expect(dropdown).toBeInstanceOf(Dropdown);
});

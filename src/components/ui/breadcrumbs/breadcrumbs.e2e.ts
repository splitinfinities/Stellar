import { Breadcrumbs } from './breadcrumbs';

it('should render and respond to changes appropriately', () => {
  const breadcrumbs = new Breadcrumbs();

  expect(breadcrumbs).toBeInstanceOf(Breadcrumbs);
});

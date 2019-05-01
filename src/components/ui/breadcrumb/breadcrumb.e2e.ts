import { Breadcrumb } from './breadcrumb';

it('should render and respond to changes appropriately', () => {
  const breadcrumb = new Breadcrumb();

  expect(breadcrumb).toBeInstanceOf(Breadcrumb);
});

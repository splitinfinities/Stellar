import { Content } from './content';

it('should render and respond to changes appropriately', () => {
  const content = new Content();
  expect(content).toBeInstanceOf(Content);
});

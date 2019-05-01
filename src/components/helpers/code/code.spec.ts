import { Code } from './code';

it('should render and respond to changes appropriately', () => {
  const code = new Code();
  expect(code.preview).toBe(true);
});

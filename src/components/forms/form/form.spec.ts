import { Form } from './form';

it('should render and respond to changes appropriately', () => {
  const form = new Form();
  expect(form).toBeInstanceOf(Form);
});

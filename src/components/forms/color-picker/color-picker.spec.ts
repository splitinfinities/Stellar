import { ColorPicker } from './color-picker';

it('should render and respond to changes appropriately', () => {
  const colorPicker = new ColorPicker();
  expect(colorPicker.val).toBe("none");
});

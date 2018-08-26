import { TestWindow } from '@stencil/core/testing';
import { ColorPicker } from './color-picker';

describe('stellar-color-picker', () => {
  it('should build', () => {
    expect(new ColorPicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarColorPickerElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ColorPicker],
        html: '<stellar-color-picker></stellar-color-picker>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-color-picker class=\"hydrated\"><div class=\"wrap\"><button value=\"default\" class=\"default\"></button><div class=\"placeholder\"></div></div></stellar-color-picker>');
    });
  });
});


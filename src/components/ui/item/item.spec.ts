import { TestWindow } from '@stencil/core/testing';
import { Item } from './item';

describe('stellar-item', () => {
  it('should build', () => {
    expect(new Item()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarItemElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Item],
        html: '<stellar-item></stellar-item>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-item href=\"#\" selectable=\"\" type=\"button\" class=\"hydrated\"><button class=\"button\" type=\"button\" href=\"#\" tabindex=\"0\"></button></stellar-item>');
    });
  });
});

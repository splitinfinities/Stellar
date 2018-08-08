import { TestWindow } from '@stencil/core/testing';
import { Label } from './label';

describe('stellar-label', () => {
  it('should build', () => {
    expect(new Label()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarLabelElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Label],
        html: '<stellar-label></stellar-label>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-label class=\"hydrated\"><label></label></stellar-label>');
    });
  });
});

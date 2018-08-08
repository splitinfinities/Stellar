import { TestWindow } from '@stencil/core/testing';
import { ToggleOption } from './toggle-option';

describe('stellar-toggle-option', () => {
  it('should build', () => {
    expect(new ToggleOption()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarToggleOptionElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ToggleOption],
        html: '<stellar-toggle-option></stellar-toggle-option>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-toggle-option type=\"checkbox\" class=\"hydrated\"><label><input type=\"hidden\" name=\"[undefined]\" value=\"\"><input class=\"input\" type=\"checkbox\" id=\"_undefined_undefined\" name=\"[undefined]\"><div class=\"box\"><div><stellar-asset name=\"checkmark\" class=\"indicator\"></stellar-asset></div></div><p></p></label></stellar-toggle-option>');
    });
  });
});

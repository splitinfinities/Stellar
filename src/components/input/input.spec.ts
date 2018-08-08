import { TestWindow } from '@stencil/core/testing';
import { Input } from './input';

describe('stellar-input', () => {
  it('should build', () => {
    expect(new Input()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarInputElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Input],
        html: '<stellar-input></stellar-input>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual(`<stellar-input type=\"text\" value=\"\" class=\"hydrated\"><div class=\"wrapper\"><label><div class=\"content\"><input class=\"input\" id="${element.getId()}" type=\"text\" placeholder=\"Enter a value\" maxlength=\"1000\" step=\"1\" autocomplete=\"text\"></div></label></div></stellar-input>`);
    });
  });
});

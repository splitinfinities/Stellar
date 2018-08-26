import { TestWindow } from '@stencil/core/testing';
import { Switch } from './switch';

describe('stellar-switch', () => {
  it('should build', () => {
    expect(new Switch()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarSwitchElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Switch],
        html: '<stellar-switch></stellar-switch>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-switch class=\"hydrated\"><label class=\"label\"><input type=\"checkbox\" tabindex=\"-1\"><button><span>off</span></button></label></stellar-switch>');
    });
  });
});

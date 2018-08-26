import { TestWindow } from '@stencil/core/testing';
import { Overlay } from './overlay';

describe('stellar-overlay', () => {
  it('should build', () => {
    expect(new Overlay()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarOverlayElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Overlay],
        html: '<stellar-overlay></stellar-overlay>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-overlay class=\"hydrated\"></stellar-overlay>');
    });
  });
});

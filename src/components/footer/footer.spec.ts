import { TestWindow } from '@stencil/core/testing';
import { Footer } from './footer';

describe('stellar-footer', () => {
  it('should build', () => {
    expect(new Footer()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarFooterElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Footer],
        html: '<stellar-footer></stellar-footer>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-footer class=\"hydrated\"><footer><p>footer!</p></footer></stellar-footer>');
    });
  });
});

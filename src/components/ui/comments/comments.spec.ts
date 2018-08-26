import { TestWindow } from '@stencil/core/testing';
import { Comments } from './comments';

describe('stellar-comments', () => {
  it('should build', () => {
    expect(new Comments()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarCommentsElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Comments],
        html: '<stellar-comments></stellar-comments>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-comments class=\"hydrated\"><section></section></stellar-comments>');
    });
  });
});


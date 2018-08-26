import { TestWindow } from '@stencil/core/testing';
import { Comment } from './comment';

describe('stellar-comment', () => {
  it('should build', () => {
    expect(new Comment()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarCommentElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Comment],
        html: '<stellar-comment></stellar-comment>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-comment class=\"hydrated\"><div class=\"comment empty\"><div class=\"content\"></div><div class=\"thread\"></div></div></stellar-comment>');
    });
  });
});


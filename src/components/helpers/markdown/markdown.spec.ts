import { TestWindow } from '@stencil/core/testing';
import { Markdown } from './markdown';

describe('stellar-markdown', () => {
  it('should build', () => {
    expect(new Markdown()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarMarkdownElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Markdown],
        html: '<stellar-markdown></stellar-markdown>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

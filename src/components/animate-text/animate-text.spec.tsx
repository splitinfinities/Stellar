import { TestWindow } from '@stencil/core/testing';
import { AnimateText } from './animate-text';

describe('stellar-animate-text', () => {
  it('should build', () => {
    expect(new AnimateText()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarAnimateTextElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AnimateText],
        html: '<stellar-animate-text></stellar-animate-text>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-animate-text class="hydrated"><stellar-blur vertical="0" horizontal="4"></stellar-blur></stellar-animate-text>');
    });
  });
});

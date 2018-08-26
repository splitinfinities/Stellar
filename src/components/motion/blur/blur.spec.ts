import { TestWindow } from '@stencil/core/testing';
import { Blur } from './blur';

describe('stellar-blur', () => {
  it('should build', () => {
    expect(new Blur()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarBlurElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Blur],
        html: '<stellar-blur></stellar-blur>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('');
    });
  });
});


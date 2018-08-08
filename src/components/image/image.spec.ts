import { TestWindow } from '@stencil/core/testing';
import { StellarImage } from './image';

describe('stellar-image', () => {
  it('should build', () => {
    expect(new StellarImage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarImageElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StellarImage],
        html: '<stellar-image></stellar-image>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

import { TestWindow } from '@stencil/core/testing';
import { Slides } from './slides';

describe('stellar-slides', () => {
  it('should build', () => {
    expect(new Slides()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarSlidesElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Slides],
        html: '<stellar-slides></stellar-slides>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

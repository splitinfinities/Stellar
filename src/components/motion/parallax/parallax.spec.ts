import { TestWindow } from '@stencil/core/testing';
import { Parallax } from './parallax';

describe('stellar-parallax', () => {
  it('should build', () => {
    expect(new Parallax()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarParallaxElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Parallax],
        html: '<stellar-parallax></stellar-parallax>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

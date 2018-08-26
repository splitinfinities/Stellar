import { TestWindow } from '@stencil/core/testing';
import { Layout } from './layout';

describe('stellar-layout', () => {
  it('should build', () => {
    expect(new Layout()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarLayoutElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Layout],
        html: '<stellar-layout></stellar-layout>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-layout data-eq-pts=\"tiny: 320, small: 480, medium: 640, large: 800, massive: 1024\" align=\"center\" padding=\"medium\" size=\"medium\" class=\"hydrated\"><div class=\"layout\"></div></stellar-layout>');
    });
  });
});

import { TestWindow } from '@stencil/core/testing';
import { Grid } from './grid';

describe('stellar-grid', () => {
  it('should build', () => {
    expect(new Grid()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarGridElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Grid],
        html: '<stellar-grid></stellar-grid>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-grid data-eq-pts=\"tiny: 320, small: 480, medium: 640, large: 800, massive: 1024\" align=\"start\" cols=\"auto\" responsive=\"\" class=\"hydrated\"><div class=\"grid\"></div></stellar-grid>');
    });
  });
});

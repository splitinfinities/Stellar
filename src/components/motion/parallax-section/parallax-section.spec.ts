import { TestWindow } from '@stencil/core/testing';
import { ParallaxSection } from './parallax-section';

describe('stellar-parallax-section', () => {
  it('should build', () => {
    expect(new ParallaxSection()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarParallaxSectionElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ParallaxSection],
        html: '<stellar-parallax-section></stellar-parallax-section>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-parallax-section data-rellax-speed=\"1\" data-rellax-zindex=\"1\" class=\"hydrated\"></stellar-parallax-section>');
    });
  });
});

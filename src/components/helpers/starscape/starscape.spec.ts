import { TestWindow } from '@stencil/core/testing';
import { Starscape } from './starscape';

describe('stellar-starscape', () => {
  it('should build', () => {
    expect(new Starscape()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarStarscapeElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Starscape],
        html: '<stellar-starscape></stellar-starscape>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-starscape class=\"hydrated\"><stellar-parallax><stellar-parallax-section layer=\"2\" speed=\"-5\"><div class=\"stars\"></div></stellar-parallax-section><stellar-parallax-section layer=\"1\" speed=\"-3\"><div class=\"stars\"></div></stellar-parallax-section></stellar-parallax></stellar-starscape>');
    });
  });
});

import { TestWindow } from '@stencil/core/testing';
import { Header } from './header';

describe('stellar-header', () => {
  it('should build', () => {
    expect(new Header()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarHeaderElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Header],
        html: '<stellar-header></stellar-header>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-header class=\"hydrated\"><div class=\"content\"><stellar-starscape></stellar-starscape><div class=\"logo\"><h1 class=\"white\">🌌&nbsp;Stellar!</h1></div><div class=\"left\"></div><div class=\"right\"></div></div><stellar-progress max=\"10\" value=\"0\" slender=\"\"></stellar-progress></stellar-header>');
    });
  });
});

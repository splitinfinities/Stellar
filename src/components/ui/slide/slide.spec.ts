import { TestWindow } from '@stencil/core/testing';
import { Slide } from './slide';

describe('stellar-slide', () => {
  it('should build', () => {
    expect(new Slide()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarSlideElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Slide],
        html: '<stellar-slide></stellar-slide>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-slide class=\"slide-zoom swiper-slide hydrated\"><stellar-blur horizontal=\"0\"></stellar-blur></stellar-slide>');
    });
  });
});

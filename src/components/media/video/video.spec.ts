import { TestWindow } from '@stencil/core/testing';
import { Video } from './video';

describe('stellar-video', () => {
  it('should build', () => {
    expect(new Video()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarVideoElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Video],
        html: '<stellar-video></stellar-video>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-video class=\"hydrated\"><video preload=\"auto\" controls=\"\"></video></stellar-video>');
    });
  });
});

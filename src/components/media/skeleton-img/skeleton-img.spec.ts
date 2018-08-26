import { TestWindow } from '@stencil/core/testing';
import { SkeletonImg } from './skeleton-img';

describe('skeleton-img', () => {
  it('should build', () => {
    expect(new SkeletonImg()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarSkeletonImgElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SkeletonImg],
        html: '<skeleton-img></skeleton-img>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

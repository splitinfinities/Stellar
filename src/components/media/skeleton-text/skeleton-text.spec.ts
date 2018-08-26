import { TestWindow } from '@stencil/core/testing';
import { SkeletonText } from './skeleton-text';

describe('stellar-skeleton-text', () => {
  it('should build', () => {
    expect(new SkeletonText()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: any;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [SkeletonText],
        html: '<stellar-skeleton-text></stellar-skeleton-text>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

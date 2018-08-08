import { TestWindow } from '@stencil/core/testing';
import { GroupOverflow } from './group-overflow';

describe('stellar-group-overflow', () => {
  it('should build', () => {
    expect(new GroupOverflow()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarGroupOverflowElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [GroupOverflow],
        html: '<stellar-group-overflow></stellar-group-overflow>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-group-overflow size=\"medium\" class=\"hydrated\"><div class=\"wrapper\"><div class=\"content\"><div class=\"count\">+ more</div><div class=\"spacer\"></div></div><stellar-tooltip></stellar-tooltip></div></stellar-group-overflow>');
    });
  });
});

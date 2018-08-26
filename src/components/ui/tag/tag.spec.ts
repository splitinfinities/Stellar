import { TestWindow } from '@stencil/core/testing';
import { Tag } from './tag';

describe('stellar-tag', () => {
  it('should build', () => {
    expect(new Tag()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarTagElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Tag],
        html: '<stellar-tag></stellar-tag>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-tag class=\"hydrated\"><span class=\"tag\"></span></stellar-tag>');
    });
  });
});

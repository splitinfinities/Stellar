import { TestWindow } from '@stencil/core/testing';
import { CopyWrap } from './copy-wrap';

describe('stellar-copy-wrap', () => {
  it('should build', () => {
    expect(new CopyWrap()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarCopyWrapElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CopyWrap],
        html: '<stellar-copy-wrap></stellar-copy-wrap>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-copy-wrap class=\"hydrated\"><stellar-blur vertical=\"0\" class=\"wrap\"></stellar-blur></stellar-copy-wrap>');
    });
  });
});


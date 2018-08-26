import { TestWindow } from '@stencil/core/testing';
import { Pagination } from './pagination';

describe('stellar-pagination', () => {
  it('should build', () => {
    expect(new Pagination()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarPaginationElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Pagination],
        html: '<stellar-pagination></stellar-pagination>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

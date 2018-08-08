import { TestWindow } from '@stencil/core/testing';
import { Table } from './table';

describe('stellar-table', () => {
  it('should build', () => {
    expect(new Table()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarTableElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Table],
        html: '<stellar-table></stellar-table>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-table class=\"hydrated\"></stellar-table>');
    });
  });
});

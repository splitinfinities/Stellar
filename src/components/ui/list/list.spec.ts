import { TestWindow } from '@stencil/core/testing';
import { List } from './list';

describe('stellar-list', () => {
  it('should build', () => {
    expect(new List()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarListElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [List],
        html: '<stellar-list></stellar-list>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

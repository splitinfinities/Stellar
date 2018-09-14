import { TestWindow } from '@stencil/core/testing';
import { DocsRoot } from './root';

describe('stellar-docs', () => {
  it('should build', () => {
    expect(new DocsRoot()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarDocsRootElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DocsRoot],
        html: '<stellar-docs></stellar-docs>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});

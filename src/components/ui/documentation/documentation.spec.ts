import { TestWindow } from '@stencil/core/testing';
import { Documentation } from './documentation';
import "mutationobserver-shim";

describe('stellar-documentation', () => {
  it('should build', () => {
    expect(new Documentation()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarDocumentationElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Documentation],
        html: '<stellar-documentation></stellar-documentation>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-documentation class=\"hydrated\"><section></section></stellar-documentation>');
    });
  });
});


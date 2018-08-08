import { TestWindow } from '@stencil/core/testing';
import { Callout } from './callout';

describe('stellar-callout', () => {
  it('should build', () => {
    expect(new Callout()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarCalloutElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Callout],
        html: '<stellar-callout></stellar-callout>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-callout class=\"theme-gray hydrated\"><div class=\"callout-wrap\"></div></stellar-callout>');
    });
  });
});


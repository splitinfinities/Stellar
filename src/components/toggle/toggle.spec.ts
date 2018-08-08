import { TestWindow } from '@stencil/core/testing';
import { Toggle } from './toggle';

describe('stellar-toggle', () => {
  it('should build', () => {
    expect(new Toggle()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarToggleElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Toggle],
        html: '<stellar-toggle></stellar-toggle>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-toggle class=\"hydrated\"><div data-type=\"checkbox\"></div></stellar-toggle>');
    });
  });
});

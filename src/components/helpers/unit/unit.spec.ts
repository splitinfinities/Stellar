import { TestWindow } from '@stencil/core/testing';
import { Unit } from './unit';

describe('stellar-unit', () => {
  it('should build', () => {
    expect(new Unit()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarUnitElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Unit],
        html: '<stellar-unit></stellar-unit>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-unit decimals=\"2\" from=\"B\" to=\"KB\" value=\"1000\" class=\"hydrated\">0.98 KB</stellar-unit>');
    });
  });
});

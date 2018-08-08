import { TestWindow } from '@stencil/core/testing';
import { Tooltip } from './tooltip';

describe('stellar-tooltip', () => {
  it('should build', () => {
    expect(new Tooltip()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarTooltipElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Tooltip],
        html: '<stellar-tooltip></stellar-tooltip>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-tooltip align=\"center\" class=\"hydrated\"><div class=\"wrap\"><div class=\"after\"></div></div></stellar-tooltip>');
    });
  });
});

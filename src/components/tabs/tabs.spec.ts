import { TestWindow } from '@stencil/core/testing';
import { Tabs } from './tabs';

describe('stellar-tabs', () => {
  it('should build', () => {
    expect(new Tabs()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarTabsElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Tabs],
        html: '<stellar-tabs></stellar-tabs>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-tabs class=\"hydrated\"><div class=\"tab-wrap\"><div class=\"tab-list\"><stellar-blur horizontal=\"0\"><div class=\"indicator\"></div></stellar-blur></div></div></stellar-tabs>');
    });
  });
});

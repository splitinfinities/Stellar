import { TestWindow } from '@stencil/core/testing';
import { Tab } from './tab';

describe('stellar-tab', () => {
  it('should build', () => {
    expect(new Tab()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarTabElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Tab],
        html: '<stellar-tab></stellar-tab>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-tab href=\"#\" tag=\"button\" class=\"hydrated\"><div class=\"tab-wrap\"><button href=\"#\" tabindex=\"0\" class=\"tab-button\"><span class=\"title\"></span></button></div></stellar-tab>');
    });
  });
});

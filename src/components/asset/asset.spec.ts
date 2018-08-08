import { TestWindow } from '@stencil/core/testing';
import { Asset } from './asset';

describe('stellar-asset', () => {
  it('should build', () => {
    expect(new Asset()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarAssetElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Asset],
        html: '<stellar-asset></stellar-asset>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('');
      expect(element.outerHTML.trim()).toEqual('<stellar-asset language=\"ios-\" class=\"hydrated\"><div class=\"icon-wrap\"><ion-icon></ion-icon></div></stellar-asset>');
    });
  });
});

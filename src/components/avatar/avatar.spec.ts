import { TestWindow } from '@stencil/core/testing';
import { Avatar } from './avatar';

describe('stellar-avatar', () => {
  it('should build', () => {
    expect(new Avatar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarAvatarElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Avatar],
        html: '<stellar-avatar></stellar-avatar>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('SStellar');
      expect(element.outerHTML.trim()).toEqual('<stellar-avatar color=\"default\" initials=\"S\" name=\"Stellar\" shape=\"square\" size=\"medium\" class=\"hydrated\"><div class=\"wrapper\"><div class=\"content\"><div class=\"letter\" title=\"Stellar\">S</div><div class=\"spacer\"></div></div><stellar-tooltip>Stellar</stellar-tooltip></div></stellar-avatar>');
    });
  });
});


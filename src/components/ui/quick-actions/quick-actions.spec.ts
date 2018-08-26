import { TestWindow } from '@stencil/core/testing';
import { QuickActions } from './quick-actions';

describe('stellar-quick-actions', () => {
  it('should build', () => {
    expect(new QuickActions()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarQuickActionsElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [QuickActions],
        html: '<stellar-quick-actions></stellar-quick-actions>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-quick-actions class=\"hydrated\"><div class=\"wrap\"><div class=\"actions\"></div><button class=\"button\"><stellar-asset name=\"arrow\"></stellar-asset></button></div></stellar-quick-actions>');
    });
  });
});

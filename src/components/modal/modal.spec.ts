import { TestWindow } from '@stencil/core/testing';
import { Modal } from './modal';

describe('stellar-modal', () => {
  it('should build', () => {
    expect(new Modal()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarModalElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Modal],
        html: '<stellar-modal></stellar-modal>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-modal class=\"hydrated\"><stellar-card padding=\"small\"><header><stellar-button tag=\"button\" ghost=\"\" size=\"large\" class=\"close\">×</stellar-button></header></stellar-card></stellar-modal>');
    });
  });
});

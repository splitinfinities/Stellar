import { TestWindow } from '@stencil/core/testing';
import { ModalController } from './modal-controller';

describe('stellar-modal-controller', () => {
  it('should build', () => {
    expect(new ModalController()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarModalControllerElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ModalController],
        html: '<stellar-modal-controller></stellar-modal-controller>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-modal-controller state=\"empty\" class=\"hydrated\"><stellar-overlay></stellar-overlay><div class=\"modal-controller-wrapper\"></div></stellar-modal-controller>');
    });
  });
});

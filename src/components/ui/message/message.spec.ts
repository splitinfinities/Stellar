import { TestWindow } from '@stencil/core/testing';
import { Message } from './message';

describe('stellar-message', () => {
  it('should build', () => {
    expect(new Message()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarMessageElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Message],
        html: '<stellar-message></stellar-message>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-message class=\"theme-gray hydrated\" name=\"stellar\" visible=\"\"><div class=\"wrap\"><stellar-button icon=\"\" label=\"Close\"><stellar-asset name=\"close\"></stellar-asset></stellar-button></div></stellar-message>');
    });
  });
});

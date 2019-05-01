import { TestWindow } from '@stencil/core/testing';
import { Stripe } from './stripe';

describe('stellar-stripe', () => {
  it('should build', () => {
    expect(new Stripe()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarStripeElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Stripe],
        html: '<stellar-stripe></stellar-stripe>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

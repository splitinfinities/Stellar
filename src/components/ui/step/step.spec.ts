import { TestWindow } from '@stencil/core/testing';
import { Step } from './step';

describe('stellar-step', () => {
  it('should build', () => {
    expect(new Step()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarStepElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Step],
        html: '<stellar-step></stellar-step>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('');
    });
  });
});

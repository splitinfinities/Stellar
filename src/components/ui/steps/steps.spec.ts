import { TestWindow } from '@stencil/core/testing';
import { Steps } from './steps';

describe('stellar-steps', () => {
  it('should build', () => {
    expect(new Steps()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarStepsElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Steps],
        html: '<stellar-steps></stellar-steps>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-steps class=\"hydrated\"><div class=\"step-list\"></div></stellar-steps>');
    });
  });
});

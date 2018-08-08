import { TestWindow } from '@stencil/core/testing';
import { Progress } from './progress';

describe('stellar-progress', () => {
  it('should build', () => {
    expect(new Progress()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarProgressElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Progress],
        html: '<stellar-progress></stellar-progress>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-progress max=\"100\" value=\"0\" class=\"hydrated\"><stellar-blur class=\"progress\" horizontal=\"0\"><div class=\"status\" style=\"transform: translate(0%, 0);\"></div></stellar-blur></stellar-progress>');
    });
  });
});

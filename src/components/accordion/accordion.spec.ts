import { TestWindow } from '@stencil/core/testing';
import { Accordion } from './accordion';

describe('stellar-accordion', () => {
  it('should build', () => {
    expect(new Accordion()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarAccordionElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Accordion],
        html: '<stellar-accordion></stellar-accordion>'
      });
    });

    it('should work without parameters', () => {
      console.log(element.textContent.trim())
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });
  });
});

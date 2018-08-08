import { TestWindow } from '@stencil/core/testing';
import { Content } from './content';

describe('stellar-content', () => {
  it('should build', () => {
    expect(new Content()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarContentElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Content],
        html: '<stellar-content></stellar-content>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-content class=\"hydrated\"><stellar-blur vertical=\"0\" class=\"wrap\"></stellar-blur></stellar-content>');
    });
  });
});


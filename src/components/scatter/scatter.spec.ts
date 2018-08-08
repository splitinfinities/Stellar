import { TestWindow } from '@stencil/core/testing';
import { Scatter } from './scatter';

describe('stellar-scatter', () => {
  it('should build', () => {
    expect(new Scatter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarScatterElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Scatter],
        html: '<stellar-scatter></stellar-scatter>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-scatter class=\"hydrated\"></stellar-scatter>');
    });
  });
});

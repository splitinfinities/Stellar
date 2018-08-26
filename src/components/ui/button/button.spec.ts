import { TestWindow } from '@stencil/core/testing';
import { Button } from './button';

describe('stellar-button', () => {
  it('should build', () => {
    expect(new Button()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarButtonElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Button],
        html: '<stellar-button></stellar-button>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Submit');
    });
  });
});


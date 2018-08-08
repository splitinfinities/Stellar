import { TestWindow } from '@stencil/core/testing';
import { Card } from './card';

describe('stellar-card', () => {
  it('should build', () => {
    expect(new Card()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarCardElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Card],
        html: '<stellar-card></stellar-card>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-card padding=\"medium\" class=\"hydrated\"><div href=\"#\" name=\"\" value=\"#\" class=\"item\"></div></stellar-card>');
    });
  });
});


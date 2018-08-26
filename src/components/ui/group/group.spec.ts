import { TestWindow } from '@stencil/core/testing';
import { Group } from './group';

describe('stellar-group', () => {
  it('should build', () => {
    expect(new Group()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarGroupElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Group],
        html: '<stellar-group></stellar-group>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-group class=\"hydrated\"></stellar-group>');
    });
  });
});

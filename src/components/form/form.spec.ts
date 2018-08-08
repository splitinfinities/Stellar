import { TestWindow } from '@stencil/core/testing';
import { Form } from './form';

describe('stellar-form', () => {
  it('should build', () => {
    expect(new Form()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarFormElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Form],
        html: '<stellar-form></stellar-form>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-form class=\"hydrated\"><form method=\"get\" autocomplete=\"on\" enctype=\"application/x-www-form-urlencoded\"></form></stellar-form>');
    });
  });
});

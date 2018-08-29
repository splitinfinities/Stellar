import { TestWindow } from '@stencil/core/testing';
import { Dropdown } from './dropdown';

describe('stellar-dropdown', () => {
  it('should build', () => {
    expect(new Dropdown()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarDropdownElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Dropdown],
        html: '<stellar-dropdown></stellar-dropdown>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-dropdown position=\"center\" class=\"hydrated\"><div aria-label=\"Dropdown\" class=\"dropdown\" title=\"Dropdown\"><div class=\"toggle\"><stellar-asset name=\"arrow-down\" class=\"caret\"></stellar-asset></div><stellar-blur vertical=\"0\"><div class=\"list-wrap\"><ul class=\"list\"><div class=\"footer\"></div></ul></div></stellar-blur></div></stellar-dropdown>');
    });
  });
});


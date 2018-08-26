import { TestWindow } from '@stencil/core/testing';
import { Select } from './select';

describe('stellar-select', () => {
  it('should build', () => {
    expect(new Select()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarSelectElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Select],
        html: '<stellar-select></stellar-select>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-select value=\"false\" class=\"hydrated\"><div class=\"wrapper\"><div class=\"select\"><button type=\"button\" class=\"select-title\"><stellar-item class=\"current\" tabindex=\"-1\"></stellar-item><stellar-asset name=\"arrow-down\"></stellar-asset><input type=\"text\" tabindex=\"-1\" name=\"select\"></button><stellar-blur vertical=\"0\" class=\"select-list\"><div class=\"select-list-header\"></div><div class=\"select-list-body\"></div></stellar-blur></div></div></stellar-select>');
    });
  });
});

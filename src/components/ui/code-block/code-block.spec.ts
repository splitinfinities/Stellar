import { TestWindow } from '@stencil/core/testing';
import { CodeBlock } from './code-block';

describe('stellar-code-block', () => {
  it('should build', () => {
    expect(new CodeBlock()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarCodeBlockElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [CodeBlock],
        html: '<stellar-code-block></stellar-code-block>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-code-block language=\"html\" class=\"hydrated\"><stellar-card padding=\"tiny\"><stellar-tag>html</stellar-tag><stellar-button ghost=\"\">Copy</stellar-button><stellar-code></stellar-code></stellar-card></stellar-code-block>');
    });
  });
});


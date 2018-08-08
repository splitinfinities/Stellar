import { TestWindow } from '@stencil/core/testing';
import { Code } from './code';
import "mutationobserver-shim";

describe('stellar-code', () => {
  it('should build', () => {
    expect(new Code()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarCodeElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Code],
        html: '<stellar-code></stellar-code>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-code language=\"html\" numbers=\"\" class=\"hydrated\"><pre class=\"show-line-numbers language-html\"><code class=\" language-html\"></code><div class=\"hidden\"><slot-fb><template></template></slot-fb></div></pre></stellar-code>');
    });
  });
});


import { TestWindow } from '@stencil/core/testing';
import { Breadcrumb } from './breadcrumb';

describe('stellar-breadcrumb', () => {
  it('should build', () => {
    expect(new Breadcrumb()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarBreadcrumbElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Breadcrumb],
        html: '<stellar-breadcrumb></stellar-breadcrumb>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('');
    });
  });
});


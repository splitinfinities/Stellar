import { TestWindow } from '@stencil/core/testing';
import { Breadcrumbs } from './breadcrumbs';

describe('stellar-breadcrumbs', () => {
  it('should build', () => {
    expect(new Breadcrumbs()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarBreadcrumbsElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Breadcrumbs],
        html: '<stellar-breadcrumbs></stellar-breadcrumbs>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('');
    });
  });
});


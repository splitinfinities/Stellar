import { flush, render } from '@stencil/core/testing';
import { Asset } from './asset';

describe('stellar-asset', () => {
  it('should build', () => {
    expect(new Asset()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [Asset],
        html: '<stellar-asset></stellar-asset>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent).toEqual('Hello, my name is  ');
    });
  });
});

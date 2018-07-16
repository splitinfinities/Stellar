import { flush, render } from '@stencil/core/testing';
import { CopyWrap } from './copy-wrap';

describe('stellar-copy-wrap', () => {
  it('should build', () => {
    expect(new CopyWrap()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [CopyWrap],
        html: '<stellar-copy-wrap></stellar-copy-wrap>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent).toEqual('Hello, my name is  ');
    });
  });
});

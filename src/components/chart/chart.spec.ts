import { TestWindow } from '@stencil/core/testing';
import { Chart } from './chart';

describe('stellar-chart', () => {
  it('should build', () => {
    expect(new Chart()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStellarChartElement;
    let testWindow: TestWindow;

    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Chart],
        html: '<stellar-chart></stellar-chart>'
      });
    });

    it('should work without parameters', () => {
      expect(element.outerHTML.trim()).toEqual('<stellar-chart class=\"hydrated\"><div class=\"highchart\"></div></stellar-chart>');
    });
  });
});


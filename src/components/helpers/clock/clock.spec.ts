import { newSpecPage } from '@stencil/core/testing';
import { Clock } from './clock';

describe('stellar-clock', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Clock],
      html: `<stellar-clock time="12/12/20 12:00:00 pm"></stellar-itclockem>`,
    });
    expect(page.root).toEqualHtml(`
       <stellar-clock time="12/12/20 12:00:00 pm" style=\"--size: 200px;\">
      <mock:shadow-root>
        <svg viewBox=\"0 0 200 200\">
          <g>
            <circle cx=\"100\" cy=\"100\" id=\"circle\" r=\"95\" style=\"stroke: var(--theme-base5); stroke-width: 4px; fill: var(--theme-base0);\"></circle>
          </g>
          <line transform=\"rotate(0 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(30 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(60 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(90 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(120 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(150 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(180 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(210 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(240 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(270 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(300 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
          <line transform=\"rotate(330 100 100)\" x1=\"100\" x2=\"100\" y1=\"27\" y2=\"8.666666666666668\" style=\"stroke: #000; stroke-width: 2.5px;\"></line>
        </svg>
        <stellar-chart class=\"dn\" id=\"chart\" type=\"pie\"></stellar-chart>
        <svg class=\"above\" viewBox=\"0 0 200 200\">
          <g>
            <line id=\"hourhand\" transform=\"rotate(180 100 100)\" x1=\"100\" x2=\"100\" y1=\"100\" y2=\"140\" style=\"stroke-width: 6px; stroke: var(--theme-base9);\"></line>
            <line id=\"minutehand\" transform=\"rotate(-180 100 100)\" x1=\"100\" x2=\"100\" y1=\"100\" y2=\"160\" style=\"stroke-width: 8px; stroke: var(--theme-base7);\"></line>
            <line id=\"secondhand\" transform=\"rotate(-180 100 100)\" x1=\"100\" x2=\"100\" y1=\"100\" y2=\"180\" style=\"stroke-width: 4px; stroke: var(--theme-base3);\"></line>
          </g>
          <circle cx=\"100\" cy=\"100\" id=\"center\" r=\"4\" style=\"fill: var(--theme-base0); stroke: var(--theme-base3); stroke-width: 5px;\"></circle>
        </svg>
        <stellar-tooltip align=\"bottom-center\">
          12:00:00 PM
        </stellar-tooltip>
      </mock:shadow-root>
    </stellar-clock>
    `);
  });
})
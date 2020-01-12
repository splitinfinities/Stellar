import { newSpecPage } from '@stencil/core/testing';
import { ColorPicker } from './color-picker';

describe('stellar-color-picker', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [ColorPicker],
      html: `<stellar-color-picker></stellar-color-picker>`,
    });
    expect(page.root).toEqualHtml(`
       <stellar-color-picker val=\"none\" style=\"--selected-color: var(--none5);\">
      <mock:shadow-root>
        <div class=\"wrap\">
          <button class=\"gray\" type=\"button\" value=\"gray\" style=\"background: var(--gray5);\"></button>
          <button class=\"red\" type=\"button\" value=\"red\" style=\"background: var(--red5);\"></button>
          <button class=\"orange\" type=\"button\" value=\"orange\" style=\"background: var(--orange5);\"></button>
          <button class=\"yellow\" type=\"button\" value=\"yellow\" style=\"background: var(--yellow5);\"></button>
          <button class=\"lime\" type=\"button\" value=\"lime\" style=\"background: var(--lime5);\"></button>
          <button class=\"green\" type=\"button\" value=\"green\" style=\"background: var(--green5);\"></button>
          <button class=\"teal\" type=\"button\" value=\"teal\" style=\"background: var(--teal5);\"></button>
          <button class=\"cyan\" type=\"button\" value=\"cyan\" style=\"background: var(--cyan5);\"></button>
          <button class=\"blue\" type=\"button\" value=\"blue\" style=\"background: var(--blue5);\"></button>
          <button class=\"indigo\" type=\"button\" value=\"indigo\" style=\"background: var(--indigo5);\"></button>
          <button class=\"violet\" type=\"button\" value=\"violet\" style=\"background: var(--violet5);\"></button>
          <button class=\"fuschia\" type=\"button\" value=\"fuschia\" style=\"background: var(--fuschia5);\"></button>
          <button class=\"pink\" type=\"button\" value=\"pink\" style=\"background: var(--pink5);\"></button>
          <button class=\"none\" type=\"button\" value=\"none\" style=\"background: var(--white);\"></button>
          <div class=\"placeholder\"></div>
        </div>
      </mock:shadow-root>
    </stellar-color-picker>
    `);
  });
})
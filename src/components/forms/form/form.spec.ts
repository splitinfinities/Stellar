import { newSpecPage } from '@stencil/core/testing';
import { Form } from './form';

describe('stellar-color-picker', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Form],
      html: `<stellar-form></stellar-form>`,
    });
    expect(page.root).toEqualHtml(`
       <stellar-form>
        <form autocomplete=\"on\" enctype=\"multipart/form-data\" method=\"get\"></form>
      </stellar-form>
    `);
  });
})
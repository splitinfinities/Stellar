import { newSpecPage } from '@stencil/core/testing';
import { Group } from './group';

describe('stellar-group', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Group],
      html: `<stellar-group></stellar-group>`,
    });

    expect(page.root).toEqualHtml(`
       <stellar-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stellar-group>
    `);
  });
})
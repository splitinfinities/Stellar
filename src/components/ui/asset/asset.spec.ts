import { newSpecPage } from '@stencil/core/testing';
import { Asset } from './asset';

describe('stellar-asset', () => {
  it('should render and respond to changes appropriately', async () => {
    const page = await newSpecPage({
      components: [Asset],
      html: `<stellar-asset></stellar-asset>`,
    });

    expect(page.root).toEqualHtml(`
       <stellar-asset aria-label=\"person\" language=\"ios-\" name=\"person\">
        <mock:shadow-root>
          <div class=\"icon-wrap\">
            <ion-icon aria-label=\"person\" arialabel=\"person\" name=\"person\"></ion-icon>
          </div>
        </mock:shadow-root>
      </stellar-asset>
    `);

    expect(page.root.name).toBe("person");
  });
})


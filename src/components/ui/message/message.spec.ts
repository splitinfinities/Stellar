import { newSpecPage } from '@stencil/core/testing';
import { Message } from './message';

describe('stellar-message', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Message],
            html: `<stellar-message></stellar-message>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-message class=\"db theme-gray\" name=\"stellar\" shown=\"\">
                <mock:shadow-root>
                    <div class=\"wrap\">
                    <slot></slot>
                    <button aria-label=\"Close\">
                        <ion-icon name=\"close\"></ion-icon>
                    </button>
                    </div>
                </mock:shadow-root>
            </stellar-message>
        `);
    });
})
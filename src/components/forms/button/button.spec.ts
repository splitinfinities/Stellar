import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('stellar-button', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Button],
            html: `<stellar-button></stellar-button>`,
        });
        expect(page.root).toEqualHtml(`
        <stellar-button>
            <mock:shadow-root>
                <a class="button" href="#" target="_self">
                    <div class="content">
                        <slot>
                            Submit
                        </slot>
                    </div>
                </a>
            </mock:shadow-root>
        </stellar-button>
    `);
    });
})
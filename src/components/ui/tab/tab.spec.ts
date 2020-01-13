import { newSpecPage } from '@stencil/core/testing';
import { Tab } from './tab';

describe('stellar-tab', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Tab],
            html: `<stellar-tab></stellar-tab>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-tab>
                <mock:shadow-root>
                    <div class=\"tab-wrap\">          
                        <button aria-selected=\"false\" class=\"tab-button\" role=\"tab\" tabindex=\"0\" type=\"button\">            
                            <span class=\"title\">
                                <slot></slot>            
                            </span>          
                        </button>
                    </div>
                </mock:shadow-root>
            </stellar-tab>
        `);
    });
})
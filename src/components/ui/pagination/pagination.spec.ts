import { newSpecPage } from '@stencil/core/testing';
import { Pagination } from './pagination';

describe('stellar-pagination', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Pagination],
            html: `<stellar-pagination></stellar-pagination>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-pagination current=\"1\" padding=\"2\" pages=\"1\" type=\"full\">
                <mock:shadow-root>
                    <span class=\"pagination-container\">
                    <div class=\"pagination-wrap\">
                        <a class=\"first icon\" data-hidden=\"yes\" data-page=\"1\" href=\"\">
                        <stellar-asset block=\"\" name=\"skip-backward\"></stellar-asset>
                        </a>
                        <a class=\"icon previous\" data-hidden=\"yes\" href=\"\">
                        <stellar-asset block=\"\" name=\"rewind\"></stellar-asset>
                        </a>
                        <div class=\"pages\">
                        <div class=\"ellipsis previous\" data-hidden=\"yes\">
                            …
                        </div>
                        <a class=\"current-number number\" data-current data-page=\"1\" data-visible href=\"#page-1\">
                            1
                        </a>
                        <div class=\"ellipsis next\" data-hidden=\"yes\">
                            …
                        </div>
                        <stellar-blur horizontal=\"0\">
                            <div class=\"indicator\"></div>
                        </stellar-blur>
                        </div>
                        <a class=\"icon next\" data-hidden=\"yes\" href=\"\">
                        <stellar-asset block=\"\" name=\"fastforward\"></stellar-asset>
                        </a>
                        <a class=\"icon last\" data-hidden=\"yes\" data-page=\"1\" href=\"\">
                        <stellar-asset block=\"\" name=\"skip-forward\"></stellar-asset>
                        </a>
                    </div>
                    </span>
                </mock:shadow-root>
            </stellar-pagination>
        `);
    });
})
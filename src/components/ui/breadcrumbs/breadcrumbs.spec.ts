import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumbs } from './breadcrumbs';

describe('stellar-breadcrumbs', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Breadcrumbs],
            html: `<stellar-breadcrumbs></stellar-breadcrumbs>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-breadcrumbs>
                <mock:shadow-root>
                    <div class=\"breadcrumbs\" id=\"breadcumb_wrapper\">
                    <div class=\"flush-left\"></div>
                    <stellar-breadcrumb first=\"\" tag=\"link\">
                        <ion-icon color=\"blue5\" id=\"icon\" name=\"analytics\"></ion-icon>
                        <stellar-label>
                        Home
                        </stellar-label>
                    </stellar-breadcrumb>
                    <slot></slot>
                    <div class=\"flush\"></div>
                    </div>
                </mock:shadow-root>
            </stellar-breadcrumbs>
        `);
    });
})
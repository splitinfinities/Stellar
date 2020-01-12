import { newSpecPage } from '@stencil/core/testing';
import { Progress } from './progress';

describe('stellar-progress', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Progress],
            html: `<stellar-progress></stellar-progress>`,
        });

        expect(page.root).toEqualHtml(`
        <stellar-progress max=\"100\" secondary=\"0\" value=\"0\">
            <mock:shadow-root>
                <stellar-blur class=\"progress\" horizontal=\"0\">
                    <div class=\"status\" style=\"transform: translate(0%, 0);\"></div>
                </stellar-blur>
            </mock:shadow-root>
        </stellar-progress>
    `);
    });
})
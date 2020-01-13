import { newSpecPage } from '@stencil/core/testing';
import { Layout } from './layout';

describe('stellar-layout', () => {
    it('should render and respond to changes appropriately', async () => {
        const page = await newSpecPage({
            components: [Layout],
            html: `<stellar-layout></stellar-layout>`,
        });

        expect(page.root).toEqualHtml(`
            <stellar-layout align=\"baseline\" content=\"baseline\" data-eq-pts=\"tiny: 320, small: 480, medium: 640, large: 800, massive: 1024\" padding=\"medium\" size=\"medium\">
                <mock:shadow-root>
                    <div class=\"layout\">
                        <slot></slot>
                        <slot name=\"nav\"></slot>        
                    </div>      
                </mock:shadow-root>    
            </stellar-layout>
        `);
    });
})
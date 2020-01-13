import { newSpecPage } from '@stencil/core/testing';
import { Grid } from './grid';

describe('stellar-grid', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Grid],
			html: `<stellar-grid></stellar-grid>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-grid align=\"items-start\" class=\"items-start\" cols=\"auto\" data-eq-pts=\"tiny: 320, small: 480, medium: 640, large: 800, massive: 1024\">
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
			</stellar-grid>
		`);
	});
})
import { newSpecPage } from '@stencil/core/testing';
import { Chart } from './chart';

describe('stellar-chart', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Chart],
			html: `<stellar-chart></stellar-chart>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-chart>
				<mock:shadow-root>
					<div class=\"highchart\"></div>
				</mock:shadow-root>
			</stellar-chart>
		`);
	});
})
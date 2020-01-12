import { newSpecPage } from '@stencil/core/testing';
import { Scatter } from './scatter';

describe('stellar-item', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Scatter],
			html: `<stellar-scatter></stellar-scatter>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-scatter>
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
			</stellar-scatter>
		`);
	});
})
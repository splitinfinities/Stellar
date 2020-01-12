import { newSpecPage } from '@stencil/core/testing';
import { StellarPjax } from './pjax';

describe('stellar-pjax', () => {
	xit('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [StellarPjax],
			html: `<stellar-pjax></stellar-pjax>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-pjax></stellar-pjax>
		`);
	});
})
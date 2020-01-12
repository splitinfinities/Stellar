import { newSpecPage } from '@stencil/core/testing';
import { Slides } from './slides';

describe('stellar-slides', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Slides],
			html: `<stellar-slides><stellar-slide></stellar-slide></stellar-slides>`,
		});

		expect(page.root).toEqualHtml(`

		`);
	});
})
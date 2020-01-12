import { newSpecPage } from '@stencil/core/testing';
import { ScrollZSection } from './scroll-z-section';

describe('stellar-scroll-z-section', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [ScrollZSection],
			html: `<stellar-scroll-z-section></stellar-scroll-z-section>`,
		});

		expect(page.root).toEqualHtml(`<stellar-scroll-z-section></stellar-scroll-z-section>`);
	});
})
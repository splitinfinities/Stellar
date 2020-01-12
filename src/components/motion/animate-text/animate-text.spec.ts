import { newSpecPage } from '@stencil/core/testing';
import { AnimateText } from './animate-text';

describe('stellar-animate-text', () => {
	xit('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [AnimateText],
			html: `<stellar-animate-text>Awesome!!</stellar-animate-text>`,
		});

		expect(page.root).toEqualHtml(`
			
		`);
	});
})
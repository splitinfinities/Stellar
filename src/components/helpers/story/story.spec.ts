import { newSpecPage } from '@stencil/core/testing';
import { Story } from './story';

describe('stellar-story', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Story],
			html: `<stellar-story></stellar-story>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-story></stellar-story>
		`);
	});
})
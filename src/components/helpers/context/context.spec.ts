import { newSpecPage } from '@stencil/core/testing';
import { Context } from './context';

describe('stellar-context', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Context],
			html: `<stellar-context></stellar-context>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-context><mock:shadow-root></mock:shadow-root></stellar-context>
		`);
	});
})
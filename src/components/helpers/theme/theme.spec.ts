import { newSpecPage } from '@stencil/core/testing';
import { Theme } from './theme';

describe('stellar-theme', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Theme],
			html: `<stellar-theme></stellar-theme>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-theme class=\"complement-red theme-indigo\">
			</stellar-theme>
		`);
	});
})
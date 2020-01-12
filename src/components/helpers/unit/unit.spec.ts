import { newSpecPage } from '@stencil/core/testing';
import { Unit } from './unit';

describe('stellar-unit', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Unit],
			html: `<stellar-unit></stellar-unit>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-unit decimals=\"2\" from=\"B\" to=\"KB\" value=\"1000\">
				0.98 KB
			</stellar-unit>
		`);
	});
})
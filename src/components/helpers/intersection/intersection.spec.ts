import { newSpecPage } from '@stencil/core/testing';
import { Intersection } from './intersection';

describe('stellar-intersection', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Intersection],
			html: `<stellar-intersection></stellar-intersection>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-intersection></stellar-intersection>
		`);
	});
})
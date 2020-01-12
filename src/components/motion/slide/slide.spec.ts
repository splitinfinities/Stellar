import { newSpecPage } from '@stencil/core/testing';
import { Slide } from './slide';

describe('stellar-slide', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Slide],
			html: `<stellar-slide></stellar-slide>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-slide style=\"--width: auto;\">
				<stellar-intersection multiple=\"\"></stellar-intersection>
			</stellar-slide>
		`);
	});
})
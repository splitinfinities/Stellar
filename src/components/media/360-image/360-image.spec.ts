import { newSpecPage } from '@stencil/core/testing';
import { Image360 } from './360-image';

describe('stellar-360-image', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Image360],
			html: `<stellar-360-image></stellar-360-image>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-360-image height=\"720\" width=\"1280\">
				<div>
					<div class=\"image\"></div>
					<div class=\"overlay\"></div>
					<stellar-intersection margin=\"50%\" multiple=\"\"></stellar-intersection>
					<skeleton-img height=\"720\" width=\"1280\"></skeleton-img>
				</div>
			</stellar-360-image>
		`);
	});
})
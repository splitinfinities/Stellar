import { newSpecPage } from '@stencil/core/testing';
import { Video360 } from './360-video';

describe('stellar-360-video', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Video360],
			html: `<stellar-360-video></stellar-360-video>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-360-video height=\"720\" width=\"1280\">
				<div class=\"video\"></div>
				<div class=\"overlay\"></div>
			</stellar-360-video>
		`);
	});
})
import { newSpecPage } from '@stencil/core/testing';
import { Video } from './video';

describe('stellar-video', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Video],
			html: `<stellar-video></stellar-video>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-video style=\"--width: undefined; --height: undefined; --aspect-ratio: NaN%;\">
				<video controls=\"\" preload=\"auto\"></video>
				<stellar-intersection multiple=\"\"></stellar-intersection>
			</stellar-video>
		`);
	});
})
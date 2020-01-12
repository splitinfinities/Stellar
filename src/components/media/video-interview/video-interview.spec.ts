import { newSpecPage } from '@stencil/core/testing';
import { VideoInterview } from './video-interview';

describe('stellar-video-interview', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [VideoInterview],
			html: `<stellar-video-interview></stellar-video-interview>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-video-interview style=\"--width: 800px; --height: 800px; --aspectRatio: 100%;\">
				<mock:shadow-root>
					<div class=\"card\">
						<skeleton-img height=\"800\" loading=\"\" width=\"800\"></skeleton-img>
						<stellar-intersection multiple=\"\"></stellar-intersection>
					</div>
				</mock:shadow-root>
			</stellar-video-interview>
		`);
	});
})
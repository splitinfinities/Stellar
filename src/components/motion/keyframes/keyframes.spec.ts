import { newSpecPage } from '@stencil/core/testing';
import { Keyframes } from './keyframes';

describe('stellar-keyframes', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Keyframes],
			html: `<stellar-keyframes></stellar-keyframes>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-keyframes frame=\"1\" style=\"--width: 400px; --height: 400px; --aspect-ratio: 100%; --position: 0 0px;\">
				<mock:shadow-root>
					<div class=\"background\" style=\"background-image: url(undefined);\"></div>
				</mock:shadow-root>
			</stellar-keyframes>
		`);
	});
})
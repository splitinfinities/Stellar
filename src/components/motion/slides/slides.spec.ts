import { newSpecPage } from '@stencil/core/testing';
import { Slides } from './slides';

describe('stellar-slides', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Slides],
			html: `<stellar-slides></stellar-slides>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-slides tabindex=\"0\" style=\"--padding: 1rem;\">
				<mock:shadow-root>
					<button class=\"hide nav prev\">
						<ion-icon name=\"arrow-round-back\"></ion-icon>
					</button>
					<button class=\"nav next\">
						<ion-icon name=\"arrow-round-forward\"></ion-icon>
					</button>
					<div class=\"wrapper\">
						<slot></slot>
					</div>
				</mock:shadow-root>
			</stellar-slides>
		`);
	});
})
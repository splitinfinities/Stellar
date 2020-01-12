import { newSpecPage } from '@stencil/core/testing';
import { SimpleSlides } from './simple-slides';

describe('stellar-simple-slides', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [SimpleSlides],
			html: `<stellar-simple-slides></stellar-simple-slides>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-simple-slides tabindex=\"0\" style=\"--padding: 1rem;\">
				<mock:shadow-root>
					<button class=\"hide nav prev\">
						<stellar-asset name=\"arrow-round-back\"></stellar-asset>
					</button>
					<button class=\"nav next\">
						<stellar-asset name=\"arrow-round-forward\"></stellar-asset>
					</button>
					<div class=\"wrapper\">
						<slot></slot>
					</div>
				</mock:shadow-root>
			</stellar-simple-slides>
		`);
	});
})
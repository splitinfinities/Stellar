import { newSpecPage } from '@stencil/core/testing';
import { ScrollZRoot } from './scroll-z-root';

describe('stellar-scroll-z-root', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [ScrollZRoot],
			html: `<stellar-scroll-z-root></stellar-scroll-z-root>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-scroll-z-root>
				<mock:shadow-root>
					<div class=\"container\">
					<div class=\"scene\">
						<slot></slot>
					</div>
					</div>
				</mock:shadow-root>
			</stellar-scroll-z-root>
		`);
	});
})
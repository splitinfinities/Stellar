import { newSpecPage } from '@stencil/core/testing';
import { Reveal } from './reveal';

describe('stellar-reveal', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Reveal],
			html: `<stellar-reveal></stellar-reveal>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-reveal>
				<div class=\"reveal\" style=\"animation-duration: 500ms; animation-delay: 0ms; --distance: 30%;\">
					<stellar-intersection margin=\"33%\" multiple=\"\"></stellar-intersection>
				</div>
			</stellar-reveal>
		`);
	});
})
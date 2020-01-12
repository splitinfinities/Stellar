import { newSpecPage } from '@stencil/core/testing';
import { Starscape } from './starscape';

describe('stellar-starscape', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Starscape],
			html: `<stellar-starscape></stellar-starscape>`,
		});

		expect(page.root).toEqualHtml(`
		<stellar-starscape>
			<stellar-parallax horizontal=\"\">
				<stellar-parallax-section speed=\"5\">
					<div class=\"stars\"></div>
				</stellar-parallax-section>
				<stellar-parallax-section speed=\"-10\">
					<div class=\"stars\"></div>
				</stellar-parallax-section>
				<stellar-parallax-section speed=\"-4\">
					<div class=\"stars\"></div>
				</stellar-parallax-section>
			</stellar-parallax>
		</stellar-starscape>
		`);
	});
})
import { newSpecPage } from '@stencil/core/testing';
import { ParallaxSection } from './parallax-section';

describe('stellar-item', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [ParallaxSection],
			html: `<stellar-parallax-section><p>nice</p></stellar-parallax-section>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-parallax-section speed=\"1\">
				<p>nice</p>
			</stellar-parallax-section>
		`);
	});
})
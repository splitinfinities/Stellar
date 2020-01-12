import { newSpecPage } from '@stencil/core/testing';
import { Parallax } from './parallax';
import { ParallaxSection } from '../parallax-section/parallax-section';

describe('stellar-parallax', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Parallax, ParallaxSection],
			html: `<stellar-parallax><stellar-parallax-section><p>Nice</p></stellar-parallax-section></stellar-parallax>`,
		});

		expect(page.root).toEqualHtml(`
		<stellar-parallax>
			<stellar-parallax-section speed=\"1\">
				<p>Nice</p>
			</stellar-parallax-section>
		</stellar-parallax>`);
	});
})
import { newSpecPage } from '@stencil/core/testing';
import { RevealList } from './reveal-list';

describe('stellar-reveal-list', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [RevealList],
			html: `<stellar-reveal-list></stellar-reveal-list>`,
		});

		expect(page.root).toEqualHtml(`
		<stellar-reveal-list animation=\"fadeInUp\" delay=\"100\" out-animation=\"fadeOut\" timing=\"20\">
			<mock:shadow-root>
				<stellar-intersection></stellar-intersection>
				<slot></slot>
			</mock:shadow-root>
		</stellar-reveal-list>
		`);
	});
})
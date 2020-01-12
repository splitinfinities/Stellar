import { newSpecPage } from '@stencil/core/testing';
import { LongShadow } from './long-shadow';

describe('stellar-long-shadow', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [LongShadow],
			html: `<stellar-long-shadow></stellar-long-shadow>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-long-shadow delay=\"100\" direction=\"top-left\" length=\"100\" timing=\"50\">
				<mock:shadow-root>
					<stellar-intersection multiple=\"\">
						<slot></slot>
					</stellar-intersection>
				</mock:shadow-root>
			</stellar-long-shadow>
		`);
	});
})
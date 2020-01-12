import { newSpecPage } from '@stencil/core/testing';
import { Follow } from './follow';

describe('stellar-follow', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Follow],
			html: `<stellar-follow></stellar-follow>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-follow style=\"--left: 50%; --top: -3000px;\">
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
			</stellar-follow>
		`);
	});
})
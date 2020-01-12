import { newSpecPage } from '@stencil/core/testing';
import { SkeletonText } from './skeleton-text';

describe('skeleton-text', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [SkeletonText],
			html: `<skeleton-text></skeleton-text>`,
		});

		expect(page.root).toEqualHtml(`
			<skeleton-text as=\"p\" width=\"100\" style=\"--width: 100%;\">
				<span>
					<stellar-intersection multiple=\"\"></stellar-intersection>
				</span>
			</skeleton-text>
		`);
	});
})
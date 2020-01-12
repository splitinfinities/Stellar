import { newSpecPage } from '@stencil/core/testing';
import { SkeletonImg } from './skeleton-img';

describe('skeleton-img', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [SkeletonImg],
			html: `<skeleton-img></skeleton-img>`,
		});

		expect(page.root).toEqualHtml(`
			<skeleton-img height=\"300\" width=\"600\" style=\"--width: 600px; --height: 300px;\">
				<svg height=\"300\" width=\"600\">
					<rect height=\"300\" width=\"600\"></rect>
				</svg>
				<stellar-intersection multiple=\"\"></stellar-intersection>
			</skeleton-img>
		`);
	});
})
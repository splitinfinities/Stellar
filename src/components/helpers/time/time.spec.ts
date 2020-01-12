import { newSpecPage } from '@stencil/core/testing';
import { Time } from './time';

describe('stellar-time', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Time],
			html: `<stellar-time value="2020-12-12T12:00:00+00:00"></stellar-time>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-time value="2020-12-12T12:00:00+00:00">December 12th 2020, 6:00:00 am</stellar-time>
		`);
	});
})
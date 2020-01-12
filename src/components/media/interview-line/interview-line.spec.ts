import { newSpecPage } from '@stencil/core/testing';
import { InterviewLine } from './interview-line';

describe('stellar-interview-line', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [InterviewLine],
			html: `<stellar-interview-line></stellar-interview-line>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-interview-line>
				<div class=\"line\" data-end=\"6000\" data-opacity-end=\"1\" data-opacity-start=\"0\" data-start=\"5900\" data-translatey-end=\"0\" data-translatey-start=\"10\">
					<div class=\"line\" data-end=\"8300\" data-opacity-end=\"0\" data-opacity-start=\"1\" data-start=\"8200\"></div>
				</div>
			</stellar-interview-line>
		`);
	});
})
import { newSpecPage } from '@stencil/core/testing';
import { Blur } from './blur';

describe('stellar-blur', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Blur],
			html: `<stellar-blur id="nice"></stellar-blur>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-blur horizontal=\"0\" id=\"nice\" vertical=\"0\" style="--blur-url: url('#nice-filter');">
				<svg class=\"blur-svg\">
					<defs>
						<filter id=\"nice-filter\">
							<feGaussianBlur id=\"nice-gaussian\" in=\"SourceGraphic\" stdDeviation=\"0,0\"></feGaussianBlur>
						</filter>
					</defs>
				</svg>
			</stellar-blur>
		`);
	});
})
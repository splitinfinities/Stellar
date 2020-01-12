import { newSpecPage } from '@stencil/core/testing';
import { Input } from './input';

describe('stellar-input', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Input],
			html: `<stellar-input></stellar-input>`,
		});
		expect(page.root).toEqualHtml(`
		<stellar-input placeholder=\"Enter a value\" type=\"text\">
			<mock:shadow-root>
				<div class=\"wrapper\">
				<label>
					<div class=\"content\">
					<div class=\"icon\">
						<slot name=\"icon\"></slot>
					</div>
					<input autocomplete=\"text\" class=\"input\" id=\"input\" maxlength=\"1000\" placeholder=\"Enter a value\" step=\"1\" type=\"text\">
					</div>
				</label>
				</div>
			</mock:shadow-root>
		</stellar-input>
    `);
	});
})
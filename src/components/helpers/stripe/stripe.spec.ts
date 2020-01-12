import { newSpecPage } from '@stencil/core/testing';
import { Stripe } from './stripe';

describe('stellar-stripe', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Stripe],
			html: `<stellar-stripe></stellar-stripe>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-stripe>
				<div>
					<input class=\"token\" name=\"stripe\" type=\"hidden\">
					<div class=\"field\">
						<label data-for=\"stellar_stripe.form.card\">
							<p class=\"label\">
							Card details
							</p>
						</label>
						<div class=\"input\" data-tid=\"stellar_stripe.form.card\" id=\"card\"></div>
					</div>
					<stellar-grid>
						<stellar-input data-tid=\"stellar_stripe.form.phone\" id=\"phone\" label=\"Phone number\" placeholder=\"(941) 555-0123\" required=\"\" type=\"tel\"></stellar-input>
						<stellar-input data-tid=\"stellar_stripe.form.postal_code\" id=\"zip\" label=\"ZIP\" placeholder=\"94107\" required=\"\" type=\"text\"></stellar-input>
					</stellar-grid>
				</div>
			</stellar-stripe>
		`);
	});
})
import { newSpecPage } from '@stencil/core/testing';
import { PasswordRequirements } from './password-requirements';

describe('stellar-item', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [PasswordRequirements],
			html: `<stellar-password-requirements></stellar-password-requirements>`,
		});
		expect(page.root).toEqualHtml(`
       
    `);
	});
})
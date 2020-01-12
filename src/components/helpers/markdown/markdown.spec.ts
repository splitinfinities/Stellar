import { newSpecPage } from '@stencil/core/testing';
import { Markdown } from './markdown';

describe('stellar-markdown', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Markdown],
			html: `<stellar-markdown><template>#nice</template></stellar-markdown>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-markdown>
				<template>
					#nice
				</template>
				<copy-wrap class=\"wrap\" full=\"\">
					<div>
					<h1 id=\"nice\">
						nice
					</h1>
					</div>      
				</copy-wrap>    
			</stellar-markdown>
		`);
	});
})
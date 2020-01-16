import { newSpecPage } from '@stencil/core/testing';
import { Song } from './song';

describe('stellar-song', () => {
	xit('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Song],
			html: `<stellar-song src="https://ui.splitinfinities.com/audio/playlist/01%20The%20Leaves%20Were%20Falling.mp3"></stellar-song>`,
		});

		expect(page.root).toEqualHtml(`
			
		`);
	});
})
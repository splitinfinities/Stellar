import { newSpecPage } from '@stencil/core/testing';
import { Picture } from './image';

describe('stellar-image', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [Picture],
			html: `<stellar-image width="2792" height="1574" preload="./global/images/_images/google_cardboard_will@2x-76x43.jpg">
				<source srcset="./global/images/_images/google_cardboard_will@2x.jpg" media="(min-width:1023px) and (min-device-pixel-ratio: 2)" />
				<source srcset="./global/images/_images/google_cardboard_will@2x-1024x577.jpg" media="(min-width:1023px)" />
				<source srcset="./global/images/_images/google_cardboard_will@2x-1024x577.jpg" media="(max-width:640px) and (min-device-pixel-ratio: 2)" />
				<source srcset="./global/images/_images/google_cardboard_will@2x-640x361.jpg" media="(max-width:640px)" />
			</stellar-image>`,
		});

		expect(page.root).toEqualHtml(`
			<stellar-image height=\"1574\" preload=\"./global/images/_images/google_cardboard_will@2x-76x43.jpg\" type=\"picture\" width=\"2792\" style=\"--background-image: url('undefined'); --aspect-ratio: 56.375358166189116%; --width: 2792px; --height: 1574px;\">
				<mock:shadow-root>
					<figure itemtype=\"http://schema.org/ImageObject\">
					<div class=\"overlay\"></div>
					<picture></picture>
					<div class=\"placeholder\" style=\"background-image: url(undefined);\"></div>
					<stellar-intersection></stellar-intersection>
					</figure>
				</mock:shadow-root>
				<source hidden=\"\" media=\"(min-width:1023px) and (min-device-pixel-ratio: 2)\" srcset=\"./global/images/_images/google_cardboard_will@2x.jpg\">
				<source hidden=\"\" media=\"(min-width:1023px)\" srcset=\"./global/images/_images/google_cardboard_will@2x-1024x577.jpg\">
				<source hidden=\"\" media=\"(max-width:640px) and (min-device-pixel-ratio: 2)\" srcset=\"./global/images/_images/google_cardboard_will@2x-1024x577.jpg\">
				<source hidden=\"\" media=\"(max-width:640px)\" srcset=\"./global/images/_images/google_cardboard_will@2x-640x361.jpg\">
			</stellar-image>
		`);
	});
})
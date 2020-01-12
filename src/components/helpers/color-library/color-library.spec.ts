import { newSpecPage } from '@stencil/core/testing';
import { ColorLibrary } from './color-library';

describe('stellar-color-library', () => {
	it('should render and respond to changes appropriately', async () => {
		const page = await newSpecPage({
			components: [ColorLibrary],
			html: `<stellar-color-library></stellar-color-library>`,
		});
		expect(page.root).toEqualHtml(`
		<stellar-color-library>
			<stellar-grid class=\"pa4\">
				<stellar-card class=\"s-undefined\" padding=\"tiny\" style=\"--background: var(--base); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object black flex fw6 items-center justify-center tc ttu\">
					#26B0C7
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined\" padding=\"tiny\" style=\"--background: var(--white); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1 flex items-center\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ffffff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined\" padding=\"tiny\" style=\"--background: var(--black); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1 flex items-center\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#2d2d2d
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined\" padding=\"tiny\" style=\"--background: var(--black-alt); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1 flex items-center\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#242424
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#faf9f9
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f0ecec
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#e5dfdf
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#dad0d0
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#cec0c0
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#c0afaf
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ae9b9b
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#958585
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#766969
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-gray\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#453d3d
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ffeded
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ffd9db
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ffc3c5
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ffa9ac
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ff888d
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ff595f
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#e65055
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ca464b
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a73a3e
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-red\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#78292c
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#feefe6
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fddfcb
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fbccad
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fab78a
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f99e61
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f77d2b
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#df7126
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#c36322
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a2521c
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-orange\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#743a14
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fffeea
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fffdd4
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fffcbb
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fffba0
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fffa7f
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fff959
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#e7e150
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#cbc646
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a9a53b
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-yellow\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#7b782b
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f5ffea
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#eaffd3
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#dfffba
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#d2ff9f
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#c3ff7f
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#b2ff59
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a1e750
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#8dcb46
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#76a93b
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-lime\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#557b2a
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#edffed
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#daffd9
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#c5ffc2
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#abffa8
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#8cff87
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#45AD45
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#56e750
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#4bcb46
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#3fa93b
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-green\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#2d7b2a
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ecfff5
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#d8ffea
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#c1ffde
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a6ffcf
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#86ffbe
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#59ffa6
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#50e796
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#46cb84
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#3ba96e
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-teal\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#2a7b50
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#e5f5f8
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#c9ebf1
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a9e0e9
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#86d4df
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#5bc5d4
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#26b2c7
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#22a0b3
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#1e8d9d
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#187482
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-cyan\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#11545d
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#eaf5ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#d3eaff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#badfff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#9ed2ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#7ec3ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#59b2ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#50a0e6
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#468dca
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#3a75a7
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-blue\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#2a5478
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f0ecfb
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#e0d8f6
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#cec2f1
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#baa7ec
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a086e4
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#7c59db
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#6f50c5
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#6145ac
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#50398d
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-indigo\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#382863
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f5ecff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#ead8ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#dec1ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#cfa7ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#be86ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a659ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#9550e6
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#8346c9
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#6c3aa6
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-violet\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#4c2976
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#feedff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fdd9ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fcc3ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fba9ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fa88ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f959ff
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#e150e6
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#c546ca
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a33aa7
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-fuschia\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#762a78
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			<stellar-grid class=\"pa4\" cols=\"6\">
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base0); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fdedf3
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base1); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fcdae7
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base2); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#fbc4d9
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base3); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f9aac9
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base4); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f78bb5
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base5); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#f5619a
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base6); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#dd578b
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base7); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#c24c7a
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base8); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#a03f65
					</h6>
				</section>
				</stellar-card>
				<stellar-card class=\"s-undefined theme-pink\" padding=\"tiny\" style=\"--background: var(--theme-base9); --border: none;\">
				<section class=\"aspect-ratio aspect-ratio--1x1\">
					<h6 class=\"aspect-ratio--object base flex fw6 items-center justify-center tc ttu\">
					#732d48
					</h6>
				</section>
				</stellar-card>
			</stellar-grid>
			</stellar-color-library>
    `);
	});
})
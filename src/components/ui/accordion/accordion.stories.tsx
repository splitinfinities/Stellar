import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from "lit-html";

export default {
	title: "UI|Accordion",
	component: "stellar-accordion",
	decorators: [withKnobs, withA11y]
};

export const Default = () => {
	const content = text("Inner Content", "nice");
	const title = text("Title", "Title");
	const tag = text("Tag", "New");

	return html`
		<stellar-accordion>
			<p slot="label">${title} <stellar-tag size='tiny'>${tag}</stellar-tag></p>
			${content}
		</stellar-accordion>
  `;
};

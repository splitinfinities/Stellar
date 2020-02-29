import { text, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from "lit-html";

export default {
	title: "Accordion",
	component: "stellar-accordion",
	decorators: [withKnobs, withA11y]
};

export const Default = () => {
	const content = text("Inner Content", "nice");
	const title = text("Title", "Title");

	return html`
	<stellar-accordion title="${title}">
		${content}
	</stellar-accordion>
  `;
};

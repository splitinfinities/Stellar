import { text, select, withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { html } from "lit-html";

export default {
	title: "UI|Avatar",
	component: "stellar-avatar",
	decorators: [withKnobs, withA11y]
};

export const Default = () => {
	const name = text("Name", "William M. Riley");
	const shape = select("Shape", ["default", "circle", "rectangle", "star"], "default");
	const size = select("Size", ["tiny", "small", "default", "medium", "large"], "default");
	const color = select("Color", ["auto", "red", "orange", "yellow", "green", "blue", "purple", "magenta"], "auto");

	return html`
		<stellar-avatar name="${name}" size="${size}" shape="${shape}" color="${color}"></stellar-avatar>
  `;
};

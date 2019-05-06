# stellar-card



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-card>
    <h1>Hey! Awesome!</h1>
</stellar-card>


### Flippable

<stellar-card flippable>
    <div>
        <header>
            <h6>header</h6>
        </header>
        <section>
            <h6>body</h6>
        </section>
        <footer>
            <h6>footer</h6>
        </footer>
    </div>
    <div slot="back">
        <header>
            <h6>back header</h6>
        </header>
        <section>
            <h6>back body</h6>
        </section>
        <footer>
            <h6>back footer</h6>
        </footer>
    </div>
</stellar-card>


### Header-footer

<stellar-card>
    <header>
        <h6>header</h6>
    </header>
    <section>
        <h6>body</h6>
    </section>
    <footer>
        <h6>footer</h6>
    </footer>
</stellar-card>



## Properties

| Property     | Attribute    | Description                                                                 | Type                                               | Default     |
| ------------ | ------------ | --------------------------------------------------------------------------- | -------------------------------------------------- | ----------- |
| `flip_icon`  | `flip_icon`  | Sets the href on the anchor tag if the button is a link.                    | `string`                                           | `"cog"`     |
| `flippable`  | `flippable`  | Let's a card be flippable                                                   | `boolean`                                          | `false`     |
| `flipped`    | `flipped`    | Renders a flipped card                                                      | `boolean`                                          | `false`     |
| `for`        | `for`        | Sets the href on the anchor tag if the button is a link.                    | `string`                                           | `undefined` |
| `href`       | `href`       | Sets the href if the card is a link.                                        | `string`                                           | `"#"`       |
| `name`       | `name`       | Sets the name if the card is a button.                                      | `string`                                           | `""`        |
| `padding`    | `padding`    | Sets the padding inside of the button. Can be small, medium, or large.      | `string`                                           | `"medium"`  |
| `shadow`     | `shadow`     | Renders a shadow on the card                                                | `string`                                           | `"medium"`  |
| `tag`        | `tag`        | Sets the element to render the card as - an anchor tag, a button, or a div. | `"a" \| "button" \| "div" \| "stencil-route-link"` | `"div"`     |
| `transition` | `transition` |                                                                             | `boolean`                                          | `false`     |
| `type`       | `type`       | Sets the element to render the card as - an anchor tag, a button, or a div. | `string`                                           | `undefined` |
| `value`      | `value`      | Sets the value if the card is a button.                                     | `string`                                           | `"#"`       |


## Events

| Event  | Description | Type                |
| ------ | ----------- | ------------------- |
| `flip` |             | `CustomEvent<void>` |


## Methods

### `flip_card(e?: UIEvent) => Promise<void>`



#### Parameters

| Name | Type      | Description |
| ---- | --------- | ----------- |
| `e`  | `UIEvent` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

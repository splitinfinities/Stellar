# stellar-pagination



<!-- Auto Generated Below -->


## Usage

### Compact

<stellar-pagination current="3" pages="20" type="compact"></stellar-pagination>


### Default

<stellar-pagination current="3" pages="20"></stellar-pagination>



## Properties

| Property  | Attribute | Description                                            | Type                  | Default       |
| --------- | --------- | ------------------------------------------------------ | --------------------- | ------------- |
| `color`   | `color`   |                                                        | `string`              | `"gray"`      |
| `current` | `current` |                                                        | `number`              | `1`           |
| `padding` | `padding` |                                                        | `number`              | `2`           |
| `pages`   | `pages`   | Public: Sets the max cap of pages you can skip through | `number`              | `1`           |
| `type`    | `type`    |                                                        | `"compact" \| "full"` | `"full"`      |
| `url`     | `url`     |                                                        | `any`                 | `"#page-{0}"` |


## Events

| Event     | Description | Type                |
| --------- | ----------- | ------------------- |
| `changed` |             | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

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
| `dark`    | `dark`    |                                                        | `boolean`             | `false`       |
| `padding` | `padding` |                                                        | `number`              | `2`           |
| `pages`   | `pages`   | Public: Sets the max cap of pages you can skip through | `number`              | `1`           |
| `type`    | `type`    |                                                        | `"compact" or "full"` | `"full"`      |
| `url`     | `url`     |                                                        | `any`                 | `"#page-{0}"` |


## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `changed` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [stellar-asset](../asset)
- [stellar-blur](../../motion/blur)
- [stellar-input](../../forms/input)
- context-consumer

### Graph
```mermaid
graph TD;
  stellar-pagination --> stellar-asset
  stellar-pagination --> stellar-blur
  stellar-pagination --> stellar-input
  stellar-pagination --> context-consumer
  stellar-asset --> stellar-icon
  stellar-input --> stellar-label
  stellar-input --> copy-wrap
  stellar-input --> stellar-asset
  stellar-input --> stellar-unit
  stellar-input --> stellar-tooltip
  stellar-input --> context-consumer
  stellar-label --> context-consumer
  stellar-tooltip --> context-consumer
  style stellar-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

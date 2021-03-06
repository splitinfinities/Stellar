# stellar-toggle-option



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                    | Type      | Default       |
| ---------------- | ----------------- | ---------------------------------------------- | --------- | ------------- |
| `checked`        | `checked`         |                                                | `boolean` | `false`       |
| `checkedDefault` | `checked-default` |                                                | `boolean` | `false`       |
| `dark`           | `dark`            | Sets the button or link as an outlined button. | `boolean` | `false`       |
| `default`        | `default`         |                                                | `string`  | `""`          |
| `disabled`       | `disabled`        |                                                | `boolean` | `undefined`   |
| `for`            | `for`             |                                                | `string`  | `""`          |
| `icon`           | `icon`            |                                                | `boolean` | `undefined`   |
| `inline`         | `inline`          |                                                | `boolean` | `undefined`   |
| `name`           | `name`            |                                                | `string`  | `undefined`   |
| `required`       | `required`        |                                                | `boolean` | `undefined`   |
| `selectedCopy`   | `selected-copy`   |                                                | `string`  | `"Selected!"` |
| `single`         | `single`          |                                                | `boolean` | `undefined`   |
| `size`           | `size`            |                                                | `boolean` | `undefined`   |
| `tooltip`        | `tooltip`         |                                                | `string`  | `undefined`   |
| `type`           | `type`            |                                                | `string`  | `"checkbox"`  |
| `value`          | `value`           |                                                | `string`  | `undefined`   |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `changeToggle` |             | `CustomEvent<any>` |


## Methods

### `confirm() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `updateSelected(value: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [stellar-asset](../../ui/asset)
- [stellar-blur](../../motion/blur)
- [stellar-tag](../../ui/tag)
- [stellar-tooltip](../../ui/tooltip)
- context-consumer

### Graph
```mermaid
graph TD;
  stellar-toggle-option --> stellar-asset
  stellar-toggle-option --> stellar-blur
  stellar-toggle-option --> stellar-tag
  stellar-toggle-option --> stellar-tooltip
  stellar-toggle-option --> context-consumer
  stellar-asset --> stellar-icon
  stellar-tag --> stellar-label
  stellar-tag --> context-consumer
  stellar-label --> context-consumer
  stellar-tooltip --> context-consumer
  style stellar-toggle-option fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

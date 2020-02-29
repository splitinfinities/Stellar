# stellar-accordian



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default          |
| -------- | --------- | ----------- | --------- | ---------------- |
| `dark`   | `dark`    |             | `boolean` | `false`          |
| `label`  | `label`   |             | `string`  | `"More Details"` |
| `name`   | `name`    |             | `string`  | `"accordion"`    |
| `open`   | `open`    |             | `boolean` | `false`          |
| `tight`  | `tight`   |             | `boolean` | `false`          |


## Methods

### `refresh() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [stellar-button](../../forms/button)
- ion-icon
- [stellar-blur](../../motion/blur)
- context-consumer

### Graph
```mermaid
graph TD;
  stellar-accordion --> stellar-button
  stellar-accordion --> ion-icon
  stellar-accordion --> stellar-blur
  stellar-accordion --> context-consumer
  stellar-button --> ion-icon
  stellar-button --> stencil-route-link
  stellar-button --> context-consumer
  style stellar-accordion fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

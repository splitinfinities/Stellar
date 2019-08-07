# stellar-label



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                    | Type      | Default     |
| ------------ | ------------ | ---------------------------------------------- | --------- | ----------- |
| `dark`       | `dark`       | Sets the button or link as an outlined button. | `boolean` | `false`     |
| `for`        | `for`        |                                                | `string`  | `undefined` |
| `size`       | `size`       |                                                | `string`  | `undefined` |
| `underneath` | `underneath` |                                                | `boolean` | `undefined` |


## Dependencies

### Used by

 - [stellar-breadcrumbs](../../ui/breadcrumbs)
 - [stellar-input](../input)
 - [stellar-select](../select)
 - [stellar-step](../../ui/step)
 - [stellar-tag](../../ui/tag)
 - [stellar-toggle](../toggle)

### Depends on

- context-consumer

### Graph
```mermaid
graph TD;
  stellar-label --> context-consumer
  stellar-breadcrumbs --> stellar-label
  stellar-input --> stellar-label
  stellar-select --> stellar-label
  stellar-step --> stellar-label
  stellar-tag --> stellar-label
  stellar-toggle --> stellar-label
  style stellar-label fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

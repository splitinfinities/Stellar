# stellar-card



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default                              |
| -------- | --------- | ----------- | -------- | ------------------------------------ |
| `name`   | `name`    |             | `string` | `'stripe'`                           |
| `token`  | `token`   |             | `string` | `'pk_test_6pRNASCoBOKtIshFeQd4XMUh'` |


## Methods

### `connect() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `getToken() => Promise<boolean>`



#### Returns

Type: `Promise<boolean>`



### `setError(error: string) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [stellar-input](../../forms/input)
- [stellar-grid](../../ui/grid)

### Graph
```mermaid
graph TD;
  stellar-stripe --> stellar-input
  stellar-stripe --> stellar-grid
  stellar-input --> stellar-label
  stellar-input --> copy-wrap
  stellar-input --> stellar-asset
  stellar-input --> stellar-unit
  stellar-input --> stellar-tooltip
  stellar-input --> context-consumer
  stellar-label --> context-consumer
  stellar-tooltip --> context-consumer
  style stellar-stripe fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

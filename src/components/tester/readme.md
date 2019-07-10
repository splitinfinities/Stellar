# stellar-tester



<!-- Auto Generated Below -->


## Methods

### `new_options() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [stellar-form](../forms/form)
- [stellar-select](../forms/select)
- [stellar-item](../forms/item)

### Graph
```mermaid
graph TD;
  stellar-tester --> stellar-form
  stellar-tester --> stellar-select
  stellar-tester --> stellar-item
  stellar-select --> stellar-label
  stellar-select --> stellar-button
  stellar-select --> stellar-asset
  stellar-select --> stellar-item
  stellar-select --> stellar-tooltip
  stellar-select --> stellar-blur
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-asset --> ion-icon
  stellar-item --> stellar-asset
  style stellar-tester fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

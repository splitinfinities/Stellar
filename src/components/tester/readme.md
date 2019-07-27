# stellar-tester



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [stellar-layout](../ui/layout)
- [copy-wrap](../ui/copy-wrap)
- [stellar-form](../forms/form)
- [stellar-grid](../ui/grid)
- [stellar-select](../forms/select)
- [stellar-item](../forms/item)

### Graph
```mermaid
graph TD;
  stellar-tester --> stellar-layout
  stellar-tester --> copy-wrap
  stellar-tester --> stellar-form
  stellar-tester --> stellar-grid
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
  stellar-asset --> stellar-icon
  stellar-item --> stellar-asset
  style stellar-tester fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
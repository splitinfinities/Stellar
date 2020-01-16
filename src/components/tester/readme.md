# stellar-tester



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [stellar-layout](../ui/layout)
- [stellar-theme](../helpers/theme)
- [copy-wrap](../ui/copy-wrap)
- [stellar-form](../forms/form)
- [stellar-grid](../ui/grid)
- [stellar-select](../forms/select)
- [stellar-item](../forms/item)
- [stellar-button](../forms/button)

### Graph
```mermaid
graph TD;
  stellar-tester --> stellar-layout
  stellar-tester --> stellar-theme
  stellar-tester --> copy-wrap
  stellar-tester --> stellar-form
  stellar-tester --> stellar-grid
  stellar-tester --> stellar-select
  stellar-tester --> stellar-item
  stellar-tester --> stellar-button
  stellar-theme --> context-consumer
  stellar-select --> stellar-label
  stellar-select --> stellar-button
  stellar-select --> ion-icon
  stellar-select --> stellar-item
  stellar-select --> stellar-tooltip
  stellar-select --> stellar-blur
  stellar-select --> context-consumer
  stellar-label --> context-consumer
  stellar-button --> ion-icon
  stellar-button --> stencil-route-link
  stellar-button --> context-consumer
  stellar-item --> ion-icon
  stellar-item --> context-consumer
  stellar-tooltip --> context-consumer
  style stellar-tester fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

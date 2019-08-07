# stellar-asset-library



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [stellar-grid](../../ui/grid)
- [stellar-code](../code)

### Graph
```mermaid
graph TD;
  stellar-asset-library --> stellar-grid
  stellar-asset-library --> stellar-code
  stellar-code --> stellar-card
  stellar-code --> context-consumer
  stellar-card --> stellar-button
  stellar-card --> stellar-asset
  stellar-card --> context-consumer
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-button --> context-consumer
  stellar-asset --> stellar-icon
  style stellar-asset-library fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

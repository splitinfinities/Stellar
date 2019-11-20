# stellar-color-library



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-color-library></stellar-color-library>



## Properties

| Property | Attribute | Description | Type       | Default     |
| -------- | --------- | ----------- | ---------- | ----------- |
| `colors` | `colors`  |             | `"string"` | `undefined` |


## Dependencies

### Depends on

- [stellar-grid](../../ui/grid)
- [stellar-card](../../ui/card)

### Graph
```mermaid
graph TD;
  stellar-color-library --> stellar-grid
  stellar-color-library --> stellar-card
  stellar-card --> stellar-button
  stellar-card --> stellar-asset
  stellar-card --> context-consumer
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-button --> context-consumer
  stellar-asset --> stellar-icon
  style stellar-color-library fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

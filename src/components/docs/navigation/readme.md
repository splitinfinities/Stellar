# stellar-docs-navigation



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type  | Default     |
| --------------- | --------------- | ----------- | ----- | ----------- |
| `collection`    | `collection`    |             | `any` | `undefined` |
| `documentation` | `documentation` |             | `any` | `undefined` |
| `loader`        | `loader`        |             | `any` | `undefined` |
| `ready`         | `ready`         |             | `any` | `undefined` |


## Dependencies

### Used by

 - [stellar-docs-component](../component)
 - [stellar-docs-home](../home)
 - [stellar-docs-page](../page)

### Depends on

- [stellar-item](../../forms/item)
- [stellar-card](../../ui/card)
- [stellar-accordion](../../ui/accordion)
- [stellar-tag](../../ui/tag)
- context-consumer

### Graph
```mermaid
graph TD;
  stellar-docs-navigation --> stellar-item
  stellar-docs-navigation --> stellar-card
  stellar-docs-navigation --> stellar-accordion
  stellar-docs-navigation --> stellar-tag
  stellar-docs-navigation --> context-consumer
  stellar-item --> stellar-asset
  stellar-item --> context-consumer
  stellar-asset --> stellar-icon
  stellar-card --> stellar-button
  stellar-card --> stellar-asset
  stellar-card --> stellar-intersection
  stellar-card --> context-consumer
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-button --> context-consumer
  stellar-accordion --> stellar-button
  stellar-accordion --> stellar-asset
  stellar-accordion --> stellar-blur
  stellar-accordion --> context-consumer
  stellar-tag --> stellar-label
  stellar-tag --> context-consumer
  stellar-label --> context-consumer
  stellar-docs-component --> stellar-docs-navigation
  stellar-docs-home --> stellar-docs-navigation
  stellar-docs-page --> stellar-docs-navigation
  style stellar-docs-navigation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

# stellar-docs-navigation



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [stellar-docs-component](../component)
 - [stellar-docs-home](../home)
 - [stellar-docs-page](../page)

### Depends on

- [stellar-item](../../forms/item)
- [copy-wrap](../../ui/copy-wrap)
- [stellar-tag](../../ui/tag)
- [stellar-card](../../ui/card)
- [stellar-accordion](../../ui/accordion)

### Graph
```mermaid
graph TD;
  stellar-docs-navigation --> stellar-item
  stellar-docs-navigation --> copy-wrap
  stellar-docs-navigation --> stellar-tag
  stellar-docs-navigation --> stellar-card
  stellar-docs-navigation --> stellar-accordion
  stellar-item --> stellar-asset
  stellar-asset --> stellar-icon
  stellar-tag --> stellar-label
  stellar-card --> stellar-button
  stellar-card --> stellar-asset
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-accordion --> stellar-button
  stellar-accordion --> stellar-asset
  stellar-accordion --> stellar-blur
  stellar-docs-component --> stellar-docs-navigation
  stellar-docs-home --> stellar-docs-navigation
  stellar-docs-page --> stellar-docs-navigation
  style stellar-docs-navigation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

# stellar-docs-home



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [stellar-docs-header](../header)
- [stellar-layout](../../ui/layout)
- [stellar-docs-navigation](../navigation)

### Graph
```mermaid
graph TD;
  stellar-docs-home --> stellar-docs-header
  stellar-docs-home --> stellar-layout
  stellar-docs-home --> stellar-docs-navigation
  stellar-docs-header --> stellar-message
  stellar-docs-header --> stellar-asset
  stellar-docs-header --> stellar-button
  stellar-docs-header --> stellar-layout
  stellar-docs-header --> stellar-starscape
  stellar-docs-header --> copy-wrap
  stellar-docs-header --> stellar-tag
  stellar-docs-header --> stellar-card
  stellar-docs-header --> stellar-grid
  stellar-docs-header --> stellar-select
  stellar-docs-header --> stellar-item
  stellar-docs-header --> context-consumer
  stellar-message --> stellar-asset
  stellar-message --> context-consumer
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-button --> context-consumer
  stellar-starscape --> stellar-parallax
  stellar-starscape --> stellar-parallax-section
  stellar-tag --> stellar-label
  stellar-tag --> context-consumer
  stellar-label --> context-consumer
  stellar-card --> stellar-button
  stellar-card --> stellar-asset
  stellar-card --> context-consumer
  stellar-select --> stellar-label
  stellar-select --> stellar-button
  stellar-select --> stellar-asset
  stellar-select --> stellar-item
  stellar-select --> stellar-tooltip
  stellar-select --> stellar-blur
  stellar-select --> context-consumer
  stellar-item --> stellar-asset
  stellar-item --> context-consumer
  stellar-tooltip --> context-consumer
  stellar-docs-navigation --> stellar-item
  stellar-docs-navigation --> stellar-card
  stellar-docs-navigation --> stellar-accordion
  stellar-docs-navigation --> stellar-tag
  stellar-docs-navigation --> context-consumer
  stellar-accordion --> stellar-button
  stellar-accordion --> stellar-asset
  stellar-accordion --> stellar-blur
  stellar-accordion --> context-consumer
  style stellar-docs-home fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

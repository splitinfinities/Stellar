# stellar-docs-page



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type           | Default     |
| -------- | --------- | ----------- | -------------- | ----------- |
| `match`  | --        |             | `MatchResults` | `undefined` |


## Dependencies

### Depends on

- [stellar-docs-header](../header)
- [stellar-layout](../../ui/layout)
- [stellar-docs-navigation](../navigation)
- [stellar-markdown](../../helpers/markdown)

### Graph
```mermaid
graph TD;
  stellar-docs-page --> stellar-docs-header
  stellar-docs-page --> stellar-layout
  stellar-docs-page --> stellar-docs-navigation
  stellar-docs-page --> stellar-markdown
  stellar-docs-header --> stellar-message
  stellar-docs-header --> ion-icon
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
  stellar-message --> ion-icon
  stellar-message --> context-consumer
  stellar-button --> ion-icon
  stellar-button --> stencil-route-link
  stellar-button --> context-consumer
  stellar-starscape --> stellar-parallax
  stellar-starscape --> stellar-parallax-section
  stellar-tag --> stellar-label
  stellar-tag --> context-consumer
  stellar-label --> context-consumer
  stellar-card --> stellar-button
  stellar-card --> ion-icon
  stellar-card --> context-consumer
  stellar-select --> stellar-label
  stellar-select --> stellar-button
  stellar-select --> ion-icon
  stellar-select --> stellar-item
  stellar-select --> stellar-tooltip
  stellar-select --> stellar-blur
  stellar-select --> context-consumer
  stellar-item --> ion-icon
  stellar-item --> context-consumer
  stellar-tooltip --> context-consumer
  stellar-docs-navigation --> stellar-item
  stellar-docs-navigation --> stellar-card
  stellar-docs-navigation --> stellar-accordion
  stellar-docs-navigation --> stellar-tag
  stellar-docs-navigation --> context-consumer
  stellar-accordion --> stellar-button
  stellar-accordion --> ion-icon
  stellar-accordion --> stellar-blur
  stellar-accordion --> context-consumer
  stellar-markdown --> stellar-card
  stellar-markdown --> copy-wrap
  stellar-markdown --> stellar-input
  stellar-input --> stellar-label
  stellar-input --> copy-wrap
  stellar-input --> ion-icon
  stellar-input --> stellar-unit
  stellar-input --> stellar-tooltip
  stellar-input --> context-consumer
  style stellar-docs-page fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

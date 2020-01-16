# stellar-docs-header



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type      | Default     |
| ------------ | ------------ | ----------- | --------- | ----------- |
| `complement` | `complement` |             | `string`  | `"indigo"`  |
| `mark`       | `mark`       |             | `string`  | `undefined` |
| `max`        | `max`        |             | `number`  | `10`        |
| `package`    | `package`    |             | `any`     | `undefined` |
| `ready`      | `ready`      |             | `boolean` | `undefined` |
| `theme`      | `theme`      |             | `string`  | `"red"`     |
| `value`      | `value`      |             | `number`  | `0`         |


## Dependencies

### Used by

 - [stellar-docs-component](../component)
 - [stellar-docs-home](../home)
 - [stellar-docs-page](../page)

### Depends on

- [stellar-message](../../ui/message)
- ion-icon
- [stellar-button](../../forms/button)
- [stellar-layout](../../ui/layout)
- [stellar-starscape](../../helpers/starscape)
- [copy-wrap](../../ui/copy-wrap)
- [stellar-tag](../../ui/tag)
- [stellar-card](../../ui/card)
- [stellar-grid](../../ui/grid)
- [stellar-select](../../forms/select)
- [stellar-item](../../forms/item)
- context-consumer

### Graph
```mermaid
graph TD;
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
  stellar-docs-component --> stellar-docs-header
  stellar-docs-home --> stellar-docs-header
  stellar-docs-page --> stellar-docs-header
  style stellar-docs-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

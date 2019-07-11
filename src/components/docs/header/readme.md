# stellar-docs-header



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type      | Default     |
| ------------ | ------------ | ----------- | --------- | ----------- |
| `complement` | `complement` |             | `string`  | `"indigo"`  |
| `invert`     | `invert`     |             | `boolean` | `false`     |
| `mark`       | `mark`       |             | `string`  | `undefined` |
| `max`        | `max`        |             | `number`  | `10`        |
| `theme`      | `theme`      |             | `string`  | `"red"`     |
| `value`      | `value`      |             | `number`  | `0`         |


## Dependencies

### Used by

 - [stellar-docs-component](../component)
 - [stellar-docs-home](../home)
 - [stellar-docs-page](../page)

### Depends on

- [stellar-message](../../ui/message)
- [stellar-asset](../../ui/asset)
- [stellar-button](../../forms/button)
- [stellar-layout](../../ui/layout)
- [stellar-starscape](../../helpers/starscape)
- [copy-wrap](../../ui/copy-wrap)
- [stellar-tag](../../ui/tag)
- [stellar-card](../../ui/card)
- [stellar-grid](../../ui/grid)
- [stellar-select](../../forms/select)
- [stellar-item](../../forms/item)
- [stellar-toggle](../../forms/toggle)
- [stellar-toggle-option](../../forms/toggle-option)

### Graph
```mermaid
graph TD;
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
  stellar-docs-header --> stellar-toggle
  stellar-docs-header --> stellar-toggle-option
  stellar-message --> stellar-asset
  stellar-asset --> stellar-icon
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-starscape --> stellar-parallax
  stellar-starscape --> stellar-parallax-section
  stellar-tag --> stellar-label
  stellar-card --> stellar-button
  stellar-card --> stellar-asset
  stellar-select --> stellar-label
  stellar-select --> stellar-button
  stellar-select --> stellar-asset
  stellar-select --> stellar-item
  stellar-select --> stellar-tooltip
  stellar-select --> stellar-blur
  stellar-item --> stellar-asset
  stellar-toggle --> stellar-grid
  stellar-toggle --> stellar-label
  stellar-toggle-option --> stellar-asset
  stellar-toggle-option --> stellar-blur
  stellar-toggle-option --> stellar-tag
  stellar-toggle-option --> stellar-tooltip
  stellar-docs-component --> stellar-docs-header
  stellar-docs-home --> stellar-docs-header
  stellar-docs-page --> stellar-docs-header
  style stellar-docs-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

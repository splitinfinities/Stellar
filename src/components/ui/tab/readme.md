# stellar-content



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                | Type                                 | Default     |
| --------------- | --------------- | ---------------------------------------------------------- | ------------------------------------ | ----------- |
| `dark`          | `dark`          |                                                            | `boolean`                            | `false`     |
| `disabled`      | `disabled`      |                                                            | `boolean`                            | `false`     |
| `href`          | `href`          | Sets the href on the anchor tag if the button is a link.   | `string`                             | `'#'`       |
| `name`          | `name`          |                                                            | `string`                             | `undefined` |
| `notifications` | `notifications` |                                                            | `boolean \| number`                  | `false`     |
| `open`          | `open`          |                                                            | `boolean`                            | `false`     |
| `order`         | `order`         |                                                            | `number`                             | `undefined` |
| `tabCount`      | `tab-count`     |                                                            | `number`                             | `undefined` |
| `tag`           | `tag`           |                                                            | `"button" \| "link" \| "route-link"` | `"button"`  |
| `target`        | `target`        | Sets the target on the anchor tag if the button is a link. | `string`                             | `'_self'`   |
| `vertical`      | `vertical`      |                                                            | `boolean`                            | `false`     |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `contentChange` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [stellar-docs-component](../../docs/component)

### Depends on

- [stellar-tag](../tag)
- stencil-route-link
- context-consumer

### Graph
```mermaid
graph TD;
  stellar-tab --> stellar-tag
  stellar-tab --> stencil-route-link
  stellar-tab --> context-consumer
  stellar-tag --> stellar-label
  stellar-tag --> context-consumer
  stellar-label --> context-consumer
  stellar-docs-component --> stellar-tab
  style stellar-tab fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

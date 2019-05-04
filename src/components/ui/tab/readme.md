# stellar-content



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type                | Default     |
| --------------- | --------------- | ----------- | ------------------- | ----------- |
| `disabled`      | `disabled`      |             | `boolean`           | `false`     |
| `href`          | `href`          |             | `string`            | `"#"`       |
| `notifications` | `notifications` |             | `boolean \| number` | `false`     |
| `open`          | `open`          |             | `boolean`           | `false`     |
| `order`         | `order`         |             | `number`            | `undefined` |
| `tabCount`      | `tab-count`     |             | `number`            | `undefined` |
| `tag`           | `tag`           |             | `string`            | `"button"`  |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `contentChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [stellar-tag](../tag)

### Graph
```mermaid
graph TD;
  stellar-tab --> stellar-tag
  stellar-tag --> stellar-label
  style stellar-tab fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

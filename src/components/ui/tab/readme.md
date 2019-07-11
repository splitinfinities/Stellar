# stellar-content



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type                | Default     |
| --------------- | --------------- | ----------- | ------------------- | ----------- |
| `disabled`      | `disabled`      |             | `boolean`           | `false`     |
| `name`          | `name`          |             | `string`            | `undefined` |
| `notifications` | `notifications` |             | `boolean \| number` | `false`     |
| `open`          | `open`          |             | `boolean`           | `false`     |
| `order`         | `order`         |             | `number`            | `undefined` |
| `tabCount`      | `tab-count`     |             | `number`            | `undefined` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `contentChange` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [stellar-docs-component](../../docs/component)

### Depends on

- [stellar-tag](../tag)

### Graph
```mermaid
graph TD;
  stellar-tab --> stellar-tag
  stellar-tag --> stellar-label
  stellar-docs-component --> stellar-tab
  style stellar-tab fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

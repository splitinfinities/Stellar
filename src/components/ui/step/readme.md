# stellar-step



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type      | Default     |
| ---------- | ----------- | ----------- | --------- | ----------- |
| `disabled` | `disabled`  |             | `boolean` | `false`     |
| `href`     | `href`      |             | `string`  | `"#"`       |
| `open`     | `open`      |             | `boolean` | `false`     |
| `order`    | `order`     |             | `number`  | `undefined` |
| `tabCount` | `tab-count` |             | `number`  | `undefined` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `contentChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [stellar-label](../../forms/label)

### Graph
```mermaid
graph TD;
  stellar-step --> stellar-label
  stellar-label --> context-consumer
  style stellar-step fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

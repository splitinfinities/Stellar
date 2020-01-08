# stellar-clock



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type             | Default     |
| ---------- | ---------- | ----------- | ---------------- | ----------- |
| `animated` | `animated` |             | `boolean`        | `undefined` |
| `between`  | `between`  |             | `Date or string` | `undefined` |
| `size`     | `size`     |             | `number`         | `200`       |
| `time`     | `time`     |             | `Date or string` | `undefined` |


## Dependencies

### Depends on

- [stellar-chart](../chart)
- [stellar-tooltip](../../ui/tooltip)

### Graph
```mermaid
graph TD;
  stellar-clock --> stellar-chart
  stellar-clock --> stellar-tooltip
  stellar-chart --> context-consumer
  stellar-tooltip --> context-consumer
  style stellar-clock fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

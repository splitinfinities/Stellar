# stellar-360-image



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type      | Default     |
| ------------ | ------------ | ----------- | --------- | ----------- |
| `height`     | `height`     |             | `number`  | `720`       |
| `nolazyload` | `nolazyload` |             | `boolean` | `false`     |
| `poster`     | `poster`     |             | `string`  | `undefined` |
| `src`        | `src`        |             | `string`  | `undefined` |
| `width`      | `width`      |             | `number`  | `1280`      |


## Dependencies

### Depends on

- [stellar-intersection](../../helpers/intersection)
- [skeleton-img](../skeleton-img)

### Graph
```mermaid
graph TD;
  stellar-360-image --> stellar-intersection
  stellar-360-image --> skeleton-img
  skeleton-img --> stellar-asset
  skeleton-img --> stellar-intersection
  style stellar-360-image fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

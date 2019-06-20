# stellar-reveal



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                      | Type                                  | Default |
| ------------------- | -------------------- | -------------------------------------------------------------------------------- | ------------------------------------- | ------- |
| `animationDistance` | `animation-distance` | How far the element moves in the animation (% of element width/height)           | `string`                              | `'30%'` |
| `delay`             | `delay`              | How long to delay the animation (ms)                                             | `number`                              | `0`     |
| `direction`         | `direction`          | Direction the element moves when animating in                                    | `"down" \| "left" \| "right" \| "up"` | `'up'`  |
| `duration`          | `duration`           | How long the animation runs (ms)                                                 | `number`                              | `500`   |
| `triggerDistance`   | `trigger-distance`   | How much of the element must be visible before it animates (% of element height) | `string`                              | `'33%'` |


## Dependencies

### Depends on

- [stellar-intersection](../intersection)

### Graph
```mermaid
graph TD;
  stellar-reveal --> stellar-intersection
  style stellar-reveal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

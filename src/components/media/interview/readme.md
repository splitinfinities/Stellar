# stellar-interview



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type                                      | Default     |
| --------------- | --------------- | ----------- | ----------------------------------------- | ----------- |
| `aspectRatio`   | `aspect-ratio`  |             | `number`                                  | `100`       |
| `color`         | `color`         |             | `string`                                  | `"white"`   |
| `height`        | `height`        |             | `number`                                  | `800`       |
| `playing`       | `playing`       |             | `boolean`                                 | `false`     |
| `src`           | `src`           |             | `string`                                  | `undefined` |
| `visualization` | `visualization` |             | `"bars" \| "bars2" \| "circle" \| "wave"` | `"bars2"`   |
| `width`         | `width`         |             | `number`                                  | `800`       |


## Methods

### `pause() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `play() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `skipTo(time: number) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [skeleton-img](../skeleton-img)
- [web-audio](../../audio/web-audio)
- [web-audio-source](../../audio/web-audio-source)
- [web-audio-visualizer](../../audio/web-audio-visualizer)
- [stellar-asset](../../ui/asset)
- [stellar-unit](../../helpers/unit)
- [stellar-progress](../../forms/progress)
- [stellar-intersection](../../helpers/intersection)

### Graph
```mermaid
graph TD;
  stellar-interview --> skeleton-img
  stellar-interview --> web-audio
  stellar-interview --> web-audio-source
  stellar-interview --> web-audio-visualizer
  stellar-interview --> stellar-asset
  stellar-interview --> stellar-unit
  stellar-interview --> stellar-progress
  stellar-interview --> stellar-intersection
  skeleton-img --> stellar-asset
  skeleton-img --> stellar-intersection
  stellar-asset --> ion-icon
  style stellar-interview fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

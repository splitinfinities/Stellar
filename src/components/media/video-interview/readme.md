# stellar-interview



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type                                      | Default     |
| --------------- | --------------- | ----------- | ----------------------------------------- | ----------- |
| `aspectRatio`   | `aspect-ratio`  |             | `number`                                  | `100`       |
| `color`         | `color`         |             | `string`                                  | `"white"`   |
| `height`        | `height`        |             | `number`                                  | `800`       |
| `playing`       | `playing`       |             | `boolean`                                 | `undefined` |
| `src`           | `src`           |             | `string`                                  | `undefined` |
| `visualization` | `visualization` |             | `"bars" or "bars2" or "circle" or "wave"` | `"bars2"`   |
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
- [stellar-video](../video)
- [web-audio-visualizer](../../audio/web-audio-visualizer)
- ion-icon
- [stellar-unit](../../helpers/unit)
- [stellar-progress](../../forms/progress)
- [stellar-intersection](../../helpers/intersection)

### Graph
```mermaid
graph TD;
  stellar-video-interview --> skeleton-img
  stellar-video-interview --> stellar-video
  stellar-video-interview --> web-audio-visualizer
  stellar-video-interview --> ion-icon
  stellar-video-interview --> stellar-unit
  stellar-video-interview --> stellar-progress
  stellar-video-interview --> stellar-intersection
  skeleton-img --> ion-icon
  skeleton-img --> stellar-intersection
  stellar-video --> stellar-intersection
  stellar-progress --> context-consumer
  style stellar-video-interview fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

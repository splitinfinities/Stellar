# stellar-playlist



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute             | Description | Type                                      | Default      |
| -------------------- | --------------------- | ----------- | ----------------------------------------- | ------------ |
| `artwork`            | `artwork`             |             | `boolean`                                 | `false`      |
| `autoplay`           | `autoplay`            |             | `boolean`                                 | `false`      |
| `load`               | `load`                |             | `boolean`                                 | `false`      |
| `loading`            | `loading`             |             | `boolean`                                 | `false`      |
| `name`               | `name`                |             | `string`                                  | `"Playlist"` |
| `playing`            | `playing`             |             | `boolean`                                 | `false`      |
| `playlist`           | `playlist`            |             | `"hide" \| "show"`                        | `"show"`     |
| `remember`           | `remember`            |             | `boolean`                                 | `true`       |
| `view`               | `view`                |             | `"art" \| "playlist"`                     | `"playlist"` |
| `visualizationColor` | `visualization-color` |             | `string`                                  | `"gray"`     |
| `visualizationType`  | `visualization-type`  |             | `"bars" \| "bars2" \| "circle" \| "wave"` | `"bars"`     |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `load_songs` |             | `CustomEvent<any>` |


## Methods

### `next() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `pause() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `play(skipDefault?: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `prepare(element: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `previous() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [stellar-asset](../../ui/asset)
- [stellar-color-picker](../../forms/color-picker)
- [stellar-button](../../forms/button)
- [stellar-progress](../../forms/progress)
- [skeleton-img](../skeleton-img)
- [web-audio-visualizer](../../audio/web-audio-visualizer)

### Graph
```mermaid
graph TD;
  stellar-playlist --> stellar-asset
  stellar-playlist --> stellar-color-picker
  stellar-playlist --> stellar-button
  stellar-playlist --> stellar-progress
  stellar-playlist --> skeleton-img
  stellar-playlist --> web-audio-visualizer
  stellar-asset --> ion-icon
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  skeleton-img --> stellar-asset
  style stellar-playlist fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

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

| Event        | Description | Type                |
| ------------ | ----------- | ------------------- |
| `load_songs` |             | `CustomEvent<void>` |


## Methods

### `next() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `pause() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `play(skipDefault?: boolean) => Promise<void>`



#### Parameters

| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| `skipDefault` | `boolean` |             |

#### Returns

Type: `Promise<void>`



### `prepare(element: any) => Promise<void>`



#### Parameters

| Name      | Type  | Description |
| --------- | ----- | ----------- |
| `element` | `any` |             |

#### Returns

Type: `Promise<void>`



### `previous() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

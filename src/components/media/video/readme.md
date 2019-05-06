# stellar-video



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description | Type               | Default     |
| ------------- | --------------- | ----------- | ------------------ | ----------- |
| `autoplay`    | `autoplay`      |             | `boolean`          | `false`     |
| `controls`    | `controls`      |             | `boolean`          | `true`      |
| `height`      | `height`        |             | `number`           | `undefined` |
| `muted`       | `muted`         |             | `boolean`          | `false`     |
| `overlay`     | `overlay`       |             | `boolean`          | `undefined` |
| `playing`     | `playing`       |             | `boolean`          | `false`     |
| `playsinline` | `playsinline`   |             | `boolean`          | `false`     |
| `poster`      | `poster`        |             | `string`           | `undefined` |
| `preload`     | `preload`       |             | `string`           | `"auto"`    |
| `trackInView` | `track-in-view` |             | `boolean`          | `true`      |
| `video_tag`   | --              |             | `HTMLVideoElement` | `undefined` |
| `width`       | `width`         |             | `number`           | `undefined` |


## Events

| Event        | Description | Type                |
| ------------ | ----------- | ------------------- |
| `loaded`     |             | `CustomEvent<void>` |
| `paused`     |             | `CustomEvent<void>` |
| `played`     |             | `CustomEvent<void>` |
| `timeupdate` |             | `CustomEvent<void>` |


## Methods

### `getDuration() => Promise<number>`



#### Returns

Type: `Promise<number>`



### `pause() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `play() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `skipTo(time: any) => Promise<void>`



#### Parameters

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| `time` | `any` |             |

#### Returns

Type: `Promise<void>`



### `stop() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

# web-audio-source



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type      | Default     |
| --------------- | --------------- | ----------- | --------- | ----------- |
| `effectsvolume` | `effectsvolume` |             | `number`  | `100`       |
| `inert`         | `inert`         |             | `boolean` | `false`     |
| `midichannel`   | `midichannel`   |             | `number`  | `1`         |
| `midikey`       | `midikey`       |             | `number`  | `0`         |
| `name`          | `name`          |             | `string`  | `undefined` |
| `playing`       | `playing`       |             | `boolean` | `false`     |
| `src`           | `src`           |             | `string`  | `undefined` |


## Events

| Event        | Description | Type                |
| ------------ | ----------- | ------------------- |
| `timeupdate` |             | `CustomEvent<void>` |


## Methods

### `assignBuffer(webAudio: any, buffer: any) => void`



#### Parameters

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| `webAudio` | `any` |             |
| `buffer`   | `any` |             |

#### Returns

Type: `void`



### `gain(place?: string) => GainNode`



#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `place` | `string` |             |

#### Returns

Type: `GainNode`



### `getBuffer() => AudioBuffer`



#### Returns

Type: `AudioBuffer`



### `getDuration() => number`



#### Returns

Type: `number`



### `pause() => void`



#### Returns

Type: `void`



### `play() => void`



#### Returns

Type: `void`



### `prepare() => void`



#### Returns

Type: `void`



### `skipTo(time: any) => void`



#### Parameters

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| `time` | `any` |             |

#### Returns

Type: `void`



### `stop() => void`



#### Returns

Type: `void`



### `toggle() => void`



#### Returns

Type: `void`



### `webAudio() => HTMLElement`



#### Returns

Type: `HTMLElement`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

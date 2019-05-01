# stellar-button



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                                      | Default     |
| ------------ | ------------- | ----------- | ----------------------------------------- | ----------- |
| `danger`     | `danger`      |             | `boolean`                                 | `false`     |
| `fit`        | `fit`         |             | `boolean`                                 | `false`     |
| `focused`    | `focused`     |             | `boolean`                                 | `false`     |
| `history`    | --            |             | `RouterHistory`                           | `undefined` |
| `href`       | `href`        |             | `string`                                  | `"#"`       |
| `label`      | `label`       |             | `string`                                  | `undefined` |
| `location`   | --            |             | `LocationSegments`                        | `undefined` |
| `multiple`   | `multiple`    |             | `boolean`                                 | `false`     |
| `route`      | `route`       |             | `boolean`                                 | `false`     |
| `selectable` | `selectable`  |             | `boolean`                                 | `false`     |
| `selected`   | `selected`    |             | `boolean`                                 | `false`     |
| `simple`     | `simple`      |             | `boolean`                                 | `false`     |
| `size`       | `size`        |             | `string`                                  | `undefined` |
| `type`       | `type`        |             | `"a" \| "button" \| "stencil-route-link"` | `"button"`  |
| `value`      | `value`       |             | `string`                                  | `undefined` |
| `valueLabel` | `value-label` |             | `string`                                  | `undefined` |
| `wrap`       | `wrap`        |             | `boolean`                                 | `false`     |


## Events

| Event              | Description | Type                |
| ------------------ | ----------- | ------------------- |
| `blurChanged`      |             | `CustomEvent<void>` |
| `focusChanged`     |             | `CustomEvent<void>` |
| `mounted`          |             | `CustomEvent<void>` |
| `selectionChanged` |             | `CustomEvent<void>` |


## Methods

### `apply(data: any) => Promise<void>`



#### Parameters

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| `data` | `any` |             |

#### Returns

Type: `Promise<void>`



### `data() => Promise<{ size: string; value: string; type: "a" | "button" | "stencil-route-link"; label: string; danger: boolean; slotted: any; }>`



#### Returns

Type: `Promise<{ size: string; value: string; type: "a" | "button" | "stencil-route-link"; label: string; danger: boolean; slotted: any; }>`



### `select_item(state?: { selected: boolean; }) => void`



#### Parameters

| Name    | Type                     | Description |
| ------- | ------------------------ | ----------- |
| `state` | `{ selected: boolean; }` |             |

#### Returns

Type: `void`



### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

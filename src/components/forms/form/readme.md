# stellar-form



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type      | Default                 |
| --------------- | ---------------- | ----------- | --------- | ----------------------- |
| `acceptCharset` | `accept-charset` |             | `string`  | `undefined`             |
| `action`        | `action`         |             | `string`  | `undefined`             |
| `ajax`          | `ajax`           |             | `boolean` | `false`                 |
| `autocomplete`  | `autocomplete`   |             | `string`  | `"on"`                  |
| `enctype`       | `enctype`        |             | `string`  | `"multipart/form-data"` |
| `method`        | `method`         |             | `string`  | `"get"`                 |
| `name`          | `name`           |             | `string`  | `undefined`             |
| `novalidate`    | `novalidate`     |             | `boolean` | `false`                 |
| `target`        | `target`         |             | `string`  | `undefined`             |


## Events

| Event    | Description | Type                |
| -------- | ----------- | ------------------- |
| `submit` |             | `CustomEvent<void>` |


## Methods

### `refresh() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `register(selectors: string[]) => Promise<void>`



#### Parameters

| Name        | Type       | Description |
| ----------- | ---------- | ----------- |
| `selectors` | `string[]` |             |

#### Returns

Type: `Promise<void>`



### `state() => Promise<{ els: any; json: any; results: FormResult[]; formData: any; valid: boolean; }>`



#### Returns

Type: `Promise<{ els: any; json: any; results: FormResult[]; formData: any; valid: boolean; }>`



### `submit_form() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

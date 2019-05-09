# stellar-code



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default     |
| ------------ | ------------- | ----------- | --------- | ----------- |
| `codeString` | `code-string` |             | `string`  | `undefined` |
| `copy`       | `copy`        |             | `boolean` | `true`      |
| `expandable` | `expandable`  |             | `boolean` | `false`     |
| `expanded`   | `expanded`    |             | `boolean` | `false`     |
| `feature`    | `feature`     |             | `boolean` | `false`     |
| `language`   | `language`    |             | `string`  | `"html"`    |
| `preview`    | `preview`     |             | `boolean` | `true`      |
| `simple`     | `simple`      |             | `boolean` | `false`     |


## Methods

### `clipboard() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `highlight() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `result() => Promise<string>`



#### Returns

Type: `Promise<string>`



### `setCode(code: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [stellar-card](../../ui/card)

### Graph
```mermaid
graph TD;
  stellar-code --> stellar-card
  stellar-card --> stellar-button
  stellar-card --> stellar-asset
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-asset --> ion-icon
  style stellar-code fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

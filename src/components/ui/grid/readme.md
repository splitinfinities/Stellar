# stellar-grid



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-grid>
    <stellar-card>nice</stellar-card>
    <stellar-card>nice</stellar-card>
    <stellar-card>nice</stellar-card>
    <stellar-card>nice</stellar-card>
    <stellar-card>nice</stellar-card>
    <stellar-card>nice</stellar-card>
    <stellar-card>nice</stellar-card>
</stellar-grid>



## Properties

| Property       | Attribute      | Description | Type               | Default         |
| -------------- | -------------- | ----------- | ------------------ | --------------- |
| `align`        | `align`        |             | `string`           | `"items-start"` |
| `cols`         | `cols`         |             | `number or string` | `"auto"`        |
| `compact`      | `compact`      |             | `boolean`          | `false`         |
| `noresponsive` | `noresponsive` |             | `boolean`          | `false`         |
| `padding`      | `padding`      |             | `boolean`          | `false`         |


## Methods

### `refresh() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [stellar-asset-library](../../helpers/asset-library)
 - [stellar-color-library](../../helpers/color-library)
 - [stellar-stripe](../../helpers/stripe)
 - [stellar-tester](../../tester)
 - [stellar-toggle](../../forms/toggle)

### Graph
```mermaid
graph TD;
  stellar-asset-library --> stellar-grid
  stellar-color-library --> stellar-grid
  stellar-stripe --> stellar-grid
  stellar-tester --> stellar-grid
  stellar-toggle --> stellar-grid
  style stellar-grid fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

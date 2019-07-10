# stellar-accordian



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-accordion>
	<p slot="label">Title <stellar-tag size='tiny'>New</stellar-tag></p>
	<h1>Content!</h1>
	<h2>Hello!</h2>
</stellar-accordion>



## Properties

| Property | Attribute | Description | Type      | Default          |
| -------- | --------- | ----------- | --------- | ---------------- |
| `label`  | `label`   |             | `string`  | `"More Details"` |
| `name`   | `name`    |             | `string`  | `"accordion"`    |
| `open`   | `open`    |             | `boolean` | `false`          |
| `tight`  | `tight`   |             | `boolean` | `false`          |


## Methods

### `refresh() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [stellar-button](../../forms/button)
- [stellar-asset](../asset)
- [stellar-blur](../../motion/blur)

### Graph
```mermaid
graph TD;
  stellar-accordion --> stellar-button
  stellar-accordion --> stellar-asset
  stellar-accordion --> stellar-blur
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-asset --> stellar-icon
  style stellar-accordion fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

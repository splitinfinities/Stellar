# stellar-message



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-message>
  <stellar-asset name="happy"></stellar-asset>
  <p>Stellar is still an alpha product - some things may change!</p>
  <stellar-button size="tiny" pill>Learn More</stellar-button>
</stellar-message>


### Striped

<stellar-message striped type="alert">
  <stellar-asset name="happy"></stellar-asset>
  <p>Stellar is still an alpha product - some things may change!</p>
  <stellar-button size="tiny" pill>Learn More</stellar-button>
</stellar-message>

<stellar-message striped type="error">
  <stellar-asset name="happy"></stellar-asset>
  <p>Stellar is still an alpha product - some things may change!</p>
  <stellar-button size="tiny" pill>Learn More</stellar-button>
</stellar-message>

<stellar-message striped type="info">
  <stellar-asset name="happy"></stellar-asset>
  <p>Stellar is still an alpha product - some things may change!</p>
  <stellar-button size="tiny" pill>Learn More</stellar-button>
</stellar-message>

<stellar-message striped type="success">
  <stellar-asset name="happy"></stellar-asset>
  <p>Stellar is still an alpha product - some things may change!</p>
  <stellar-button size="tiny" pill>Learn More</stellar-button>
</stellar-message>


### Types

<stellar-message type="alert">
  <stellar-asset name="happy"></stellar-asset>
  <p>Stellar is still an alpha product - some things may change!</p>
  <stellar-button size="tiny" pill>Learn More</stellar-button>
</stellar-message>

<stellar-message type="error">
  <stellar-asset name="happy"></stellar-asset>
  <p>Stellar is still an alpha product - some things may change!</p>
  <stellar-button size="tiny" pill>Learn More</stellar-button>
</stellar-message>

<stellar-message type="info">
  <stellar-asset name="happy"></stellar-asset>
  <p>Stellar is still an alpha product - some things may change!</p>
  <stellar-button size="tiny" pill>Learn More</stellar-button>
</stellar-message>

<stellar-message type="success">
  <stellar-asset name="happy"></stellar-asset>
  <p>Stellar is still an alpha product - some things may change!</p>
  <stellar-button size="tiny" pill>Learn More</stellar-button>
</stellar-message>



## Properties

| Property   | Attribute  | Description | Type                                        | Default     |
| ---------- | ---------- | ----------- | ------------------------------------------- | ----------- |
| `closable` | `closable` |             | `boolean`                                   | `true`      |
| `name`     | `name`     |             | `string`                                    | `"stellar"` |
| `remember` | `remember` |             | `boolean`                                   | `true`      |
| `shown`    | `shown`    |             | `boolean`                                   | `true`      |
| `size`     | `size`     |             | `"default" \| "full"`                       | `undefined` |
| `striped`  | `striped`  |             | `boolean`                                   | `false`     |
| `type`     | `type`     |             | `"alert" \| "error" \| "info" \| "success"` | `undefined` |


## Dependencies

### Used by

 - [stellar-docs-header](../../docs/header)

### Depends on

- [stellar-asset](../asset)

### Graph
```mermaid
graph TD;
  stellar-message --> stellar-asset
  stellar-asset --> stellar-icon
  stellar-docs-header --> stellar-message
  style stellar-message fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

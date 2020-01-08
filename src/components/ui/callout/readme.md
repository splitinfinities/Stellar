# stellar-asset



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-callout>
  <p>Hello! <a href="#">Awesome!</a></p>
</stellar-callout>


### States

<stellar-callout type="alert">
	<p>Hello! <a href="#">Awesome!</a></p>
</stellar-callout>

<br />

<stellar-callout type="error">
	<p>Hello! <a href="#">Awesome!</a></p>
</stellar-callout>

<br />

<stellar-callout type="info">
<p>Hello! <a href="#">Awesome!</a></p>
</stellar-callout>

<br />

<stellar-callout type="success">
	<p>Hello! <a href="#">Awesome!</a></p>
</stellar-callout>



## Properties

| Property | Attribute | Description | Type                                                     | Default     |
| -------- | --------- | ----------- | -------------------------------------------------------- | ----------- |
| `dark`   | `dark`    |             | `boolean`                                                | `false`     |
| `type`   | `type`    |             | `"alert" or "default" or "error" or "info" or "success"` | `"default"` |


## Dependencies

### Depends on

- context-consumer

### Graph
```mermaid
graph TD;
  stellar-callout --> context-consumer
  style stellar-callout fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

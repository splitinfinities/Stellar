# stellar-breadcrumb



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-breadcrumbs icon="person">
	<stellar-breadcrumb>Profile</stellar-breadcrumb>
	<stellar-breadcrumb>Details</stellar-breadcrumb>
	<stellar-breadcrumb>Payment</stellar-breadcrumb>
	<stellar-breadcrumb>testing</stellar-breadcrumb>
	<stellar-breadcrumb>overflow</stellar-breadcrumb>
	<stellar-breadcrumb>so that</stellar-breadcrumb>
	<stellar-breadcrumb>We can see</stellar-breadcrumb>
	<stellar-breadcrumb>What exactly it looks like</stellar-breadcrumb>
	<stellar-breadcrumb>Right now</stellar-breadcrumb>
</stellar-breadcrumbs>


### Theming

<stellar-breadcrumbs icon="person" class="theme-violet">
	<stellar-breadcrumb>Profile</stellar-breadcrumb>
	<stellar-breadcrumb>Details</stellar-breadcrumb>
	<stellar-breadcrumb><stellar-asset name="people"></stellar-asset>Payment</stellar-breadcrumb>
</stellar-breadcrumbs>



## Properties

| Property      | Attribute     | Description | Type                                       | Default                                        |
| ------------- | ------------- | ----------- | ------------------------------------------ | ---------------------------------------------- |
| `color`       | `color`       |             | `string`                                   | `"blue5"`                                      |
| `dark`        | `dark`        |             | `boolean`                                  | `false`                                        |
| `description` | `description` |             | `string`                                   | `"An icon that shows the main page you're on"` |
| `home`        | `home`        |             | `string`                                   | `"/"`                                          |
| `icon`        | `icon`        |             | `string`                                   | `'analytics'`                                  |
| `icon_size`   | `icon_size`   |             | `number`                                   | `0.85`                                         |
| `icon_src`    | `icon_src`    |             | `string`                                   | `undefined`                                    |
| `label`       | `label`       |             | `string`                                   | `"Home"`                                       |
| `size`        | `size`        |             | `"large" \| "medium" \| "small" \| "tiny"` | `undefined`                                    |
| `tag`         | `tag`         |             | `"link" \| "route"`                        | `"link"`                                       |


## Dependencies

### Depends on

- [stellar-breadcrumb](../breadcrumb)
- [stellar-asset](../asset)
- [stellar-label](../../forms/label)
- context-consumer

### Graph
```mermaid
graph TD;
  stellar-breadcrumbs --> stellar-breadcrumb
  stellar-breadcrumbs --> stellar-asset
  stellar-breadcrumbs --> stellar-label
  stellar-breadcrumbs --> context-consumer
  stellar-breadcrumb --> context-consumer
  stellar-asset --> stellar-icon
  stellar-label --> context-consumer
  style stellar-breadcrumbs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

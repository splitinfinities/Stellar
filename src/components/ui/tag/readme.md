# stellar-tag



<!-- Auto Generated Below -->


## Usage

### Colors

<stellar-tag color="theme-base5">Theming</stellar-tag>
<stellar-tag color="theme-complement5">Theming</stellar-tag>

<stellar-tag color="red5">Awesome</stellar-tag>
<stellar-tag color="orange5">Awesome</stellar-tag>
<stellar-tag color="yellow5">Awesome</stellar-tag>
<stellar-tag color="lime5">Awesome</stellar-tag>
<stellar-tag color="green5">Awesome</stellar-tag>
<stellar-tag color="cyan5">Awesome</stellar-tag>
<stellar-tag color="blue5">Awesome</stellar-tag>
<stellar-tag color="indigo5">Awesome</stellar-tag>
<stellar-tag color="violet5">Awesome</stellar-tag>
<stellar-tag color="fuschia5">Awesome</stellar-tag>
<stellar-tag color="pink5">Awesome</stellar-tag>
<stellar-tag color="gray5">Awesome</stellar-tag>


### Default

<stellar-tag>Awesome</stellar-tag>


### Pill

<stellar-tag size="tiny" pill>Awesome</stellar-tag>
<stellar-tag size="small" pill>Awesome</stellar-tag>
<stellar-tag pill>Awesome</stellar-tag>
<stellar-tag size="medium" pill>Awesome</stellar-tag>
<stellar-tag size="large" pill>Awesome</stellar-tag>


### Sizes

<stellar-tag size="tiny">Awesome</stellar-tag>
<stellar-tag size="small">Awesome</stellar-tag>
<stellar-tag>Awesome</stellar-tag>
<stellar-tag size="medium">Awesome</stellar-tag>
<stellar-tag size="large">Awesome</stellar-tag>



## Properties

| Property    | Attribute    | Description | Type      | Default     |
| ----------- | ------------ | ----------- | --------- | ----------- |
| `color`     | `color`      |             | `string`  | `"cyan5"`   |
| `dark`      | `dark`       |             | `boolean` | `false`     |
| `outline`   | `outline`    |             | `boolean` | `false`     |
| `pill`      | `pill`       |             | `boolean` | `false`     |
| `size`      | `size`       |             | `string`  | `undefined` |
| `textColor` | `text-color` |             | `string`  | `"white"`   |


## Dependencies

### Used by

 - [stellar-docs-header](../../docs/header)
 - [stellar-docs-navigation](../../docs/navigation)
 - [stellar-tab](../tab)
 - [stellar-toggle-option](../../forms/toggle-option)

### Depends on

- [stellar-label](../../forms/label)
- context-consumer

### Graph
```mermaid
graph TD;
  stellar-tag --> stellar-label
  stellar-tag --> context-consumer
  stellar-label --> context-consumer
  stellar-docs-header --> stellar-tag
  stellar-docs-navigation --> stellar-tag
  stellar-tab --> stellar-tag
  stellar-toggle-option --> stellar-tag
  style stellar-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

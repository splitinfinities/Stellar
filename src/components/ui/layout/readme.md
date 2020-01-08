# stellar-layout



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-layout>
    <aside class="bg-theme-3"></aside>
    <section class="bg-theme-5"></section>
</stellar-layout>



## Properties

| Property  | Attribute | Description | Type                                                                        | Default      |
| --------- | --------- | ----------- | --------------------------------------------------------------------------- | ------------ |
| `align`   | `align`   |             | `"baseline" or "bottom" or "center" or "top"`                               | `"baseline"` |
| `content` | `content` |             | `"baseline" or "bottom" or "center" or "top"`                               | `"baseline"` |
| `hasNav`  | `has-nav` |             | `boolean`                                                                   | `undefined`  |
| `height`  | `height`  |             | `"fill"`                                                                    | `undefined`  |
| `padding` | `padding` |             | `"large" or "medium" or "none" or "small" or "tiny"`                        | `"medium"`   |
| `size`    | `size`    |             | `"flush" or "full" or "large" or "medium" or "small" or "tiny" or "xlarge"` | `"medium"`   |
| `type`    | `type`    |             | `string`                                                                    | `undefined`  |


## Methods

### `refresh() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [stellar-docs-component](../../docs/component)
 - [stellar-docs-header](../../docs/header)
 - [stellar-docs-home](../../docs/home)
 - [stellar-docs-page](../../docs/page)
 - [stellar-tester](../../tester)

### Graph
```mermaid
graph TD;
  stellar-docs-component --> stellar-layout
  stellar-docs-header --> stellar-layout
  stellar-docs-home --> stellar-layout
  stellar-docs-page --> stellar-layout
  stellar-tester --> stellar-layout
  style stellar-layout fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

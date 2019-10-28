# stellar-markdown



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-markdown src="https://raw.githubusercontent.com/ionic-team/stencil/master/readme.md"></stellar-markdown>


### Template

<stellar-markdown>
  <template>
# Heading
## Very cool!
- item one
- item two
- item three
  </template>
</stellar-markdown>



## Properties

| Property     | Attribute     | Description                                 | Type                                  | Default     |
| ------------ | ------------- | ------------------------------------------- | ------------------------------------- | ----------- |
| `codeString` | `code-string` | Used to set                                 | `string`                              | `undefined` |
| `editable`   | `editable`    |                                             | `boolean`                             | `false`     |
| `flavor`     | `flavor`      |                                             | `"github" \| "original" \| "vanilla"` | `"vanilla"` |
| `src`        | `src`         | Used to reference an external markdown file | `string`                              | `undefined` |


## Dependencies

### Used by

 - [stellar-docs-component](../../docs/component)
 - [stellar-docs-page](../../docs/page)

### Depends on

- [stellar-card](../../ui/card)
- [copy-wrap](../../ui/copy-wrap)
- [stellar-input](../../forms/input)

### Graph
```mermaid
graph TD;
  stellar-markdown --> stellar-card
  stellar-markdown --> copy-wrap
  stellar-markdown --> stellar-input
  stellar-card --> stellar-button
  stellar-card --> stellar-asset
  stellar-card --> context-consumer
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-button --> context-consumer
  stellar-asset --> stellar-icon
  stellar-input --> stellar-label
  stellar-input --> copy-wrap
  stellar-input --> stellar-asset
  stellar-input --> stellar-unit
  stellar-input --> stellar-tooltip
  stellar-input --> context-consumer
  stellar-label --> context-consumer
  stellar-tooltip --> context-consumer
  stellar-docs-component --> stellar-markdown
  stellar-docs-page --> stellar-markdown
  style stellar-markdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

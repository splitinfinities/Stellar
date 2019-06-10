# stellar-select



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-select name="our_select" label="What do you want?">
  <stellar-item value="one" label="Label one" selected>
    <stellar-avatar size="small"></stellar-avatar>
    Great
  </stellar-item>
  <stellar-item value="two" label="Label two">
    <stellar-avatar shape="circle" size="small"></stellar-avatar>
    Great
  </stellar-item>
  <stellar-item value="two" label="Label two">
    <stellar-avatar shape="square" size="small"></stellar-avatar>
    Great
  </stellar-item>
  <stellar-item value="three" label="Label three">
    <stellar-avatar shape="rectangle" size="small"></stellar-avatar>
    Great
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Great
  </stellar-item>
  <stellar-item value="one" label="Label one">
    <stellar-avatar size="small"></stellar-avatar>
    Great
  </stellar-item>
  <stellar-item value="two" label="Label two">
    <stellar-avatar shape="circle" size="small"></stellar-avatar>
    Great
  </stellar-item>
  <stellar-item value="two" label="Label two">
    <stellar-avatar shape="square" size="small"></stellar-avatar>
    Great
  </stellar-item>
  <stellar-item value="three" label="Label three">
    <stellar-avatar shape="rectangle" size="small"></stellar-avatar>
    Great
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Great
  </stellar-item>
</stellar-select>


### Multiple

<stellar-select name="our_select" label="What do you want?" size="small" multiple>
  <stellar-item value="one" label="Label one" selected>
    Awesome
  </stellar-item>
  <stellar-item value="two" label="Label two">
    Awesome
  </stellar-item>
  <stellar-item value="three" label="Label three">
    Awesome
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Awesome
  </stellar-item>
  <stellar-item value="one" label="Label one">
    Awesome
  </stellar-item>
  <stellar-item value="two" label="Label two">
    Awesome
  </stellar-item>
  <stellar-item value="three" label="Label three">
    Awesome
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Awesome
  </stellar-item>
  <stellar-item value="one" label="Label one">
    Awesome
  </stellar-item>
  <stellar-item value="two" label="Label two">
    Awesome
  </stellar-item>
  <stellar-item value="three" label="Label three">
    Awesome
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Awesome
  </stellar-item>
</stellar-select>


### Overlay

<stellar-select name="our_select" label="What do you want?" overlay>
  <stellar-item value="one" label="Label one" selected>
    Awesome
  </stellar-item>
  <stellar-item value="two" label="Label two">
    Awesome
  </stellar-item>
  <stellar-item value="three" label="Label three">
    Awesome
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Awesome
  </stellar-item>
  <stellar-item value="one" label="Label one">
    Awesome
  </stellar-item>
  <stellar-item value="two" label="Label two">
    Awesome
  </stellar-item>
  <stellar-item value="three" label="Label three">
    Awesome
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Awesome
  </stellar-item>
  <stellar-item value="one" label="Label one">
    Awesome
  </stellar-item>
  <stellar-item value="two" label="Label two">
    Awesome
  </stellar-item>
  <stellar-item value="three" label="Label three">
    Awesome
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Awesome
  </stellar-item>
</stellar-select>


### Small

<stellar-select name="our_select" label="What do you want?" size="small">
  <stellar-item value="one" label="Label one" selected>
    Awesome
  </stellar-item>
  <stellar-item value="two" label="Label two">
    Awesome
  </stellar-item>
  <stellar-item value="three" label="Label three">
    Awesome
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Awesome
  </stellar-item>
  <stellar-item value="one" label="Label one">
    Awesome
  </stellar-item>
  <stellar-item value="two" label="Label two">
    Awesome
  </stellar-item>
  <stellar-item value="three" label="Label three">
    Awesome
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Awesome
  </stellar-item>
  <stellar-item value="one" label="Label one">
    Awesome
  </stellar-item>
  <stellar-item value="two" label="Label two">
    Awesome
  </stellar-item>
  <stellar-item value="three" label="Label three">
    Awesome
  </stellar-item>
  <stellar-item value="four" label="Label four">
    Awesome
  </stellar-item>
</stellar-select>



## Properties

| Property              | Attribute              | Description | Type                                       | Default                 |
| --------------------- | ---------------------- | ----------- | ------------------------------------------ | ----------------------- |
| `default`             | `default`              |             | `any`                                      | `undefined`             |
| `description`         | `description`          |             | `string`                                   | `undefined`             |
| `focused`             | `focused`              |             | `boolean`                                  | `undefined`             |
| `footer`              | `footer`               |             | `boolean`                                  | `undefined`             |
| `inline`              | `inline`               |             | `boolean`                                  | `undefined`             |
| `label`               | `label`                |             | `string`                                   | `undefined`             |
| `multiple`            | `multiple`             |             | `boolean`                                  | `undefined`             |
| `name`                | `name`                 |             | `boolean \| string`                        | `"select"`              |
| `novalidate`          | `novalidate`           |             | `boolean`                                  | `undefined`             |
| `open`                | `open`                 |             | `boolean`                                  | `false`                 |
| `other`               | `other`                |             | `boolean`                                  | `undefined`             |
| `overlay`             | `overlay`              |             | `boolean`                                  | `undefined`             |
| `placeholder`         | `placeholder`          |             | `string`                                   | `"Choose something..."` |
| `placeholderInverted` | `placeholder-inverted` |             | `boolean`                                  | `undefined`             |
| `processing`          | `processing`           |             | `boolean`                                  | `undefined`             |
| `required`            | `required`             |             | `boolean`                                  | `false`                 |
| `size`                | `size`                 |             | `"large" \| "medium" \| "small" \| "tiny"` | `undefined`             |
| `tooltip`             | `tooltip`              |             | `string`                                   | `undefined`             |
| `value`               | `value`                |             | `string \| string[]`                       | `undefined`             |
| `valueLabel`          | `value-label`          |             | `string`                                   | `undefined`             |
| `verbiage`            | `verbiage`             |             | `string`                                   | `"selection"`           |
| `verbiageAn`          | `verbiage-an`          |             | `boolean`                                  | `undefined`             |


## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `change` |             | `CustomEvent<any>` |


## Methods

### `option_elements() => Promise<NodeListOf<any>>`



#### Returns

Type: `Promise<NodeListOf<any>>`



### `options() => Promise<string[]>`



#### Returns

Type: `Promise<string[]>`



### `validate() => Promise<FormResult>`



#### Returns

Type: `Promise<FormResult>`




## Dependencies

### Depends on

- [stellar-label](../label)
- [stellar-button](../button)
- [stellar-asset](../../ui/asset)
- [stellar-item](../item)
- [stellar-tooltip](../../ui/tooltip)
- [stellar-blur](../../motion/blur)

### Graph
```mermaid
graph TD;
  stellar-select --> stellar-label
  stellar-select --> stellar-button
  stellar-select --> stellar-asset
  stellar-select --> stellar-item
  stellar-select --> stellar-tooltip
  stellar-select --> stellar-blur
  stellar-button --> stellar-asset
  stellar-button --> stencil-route-link
  stellar-asset --> ion-icon
  stellar-item --> stellar-asset
  style stellar-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

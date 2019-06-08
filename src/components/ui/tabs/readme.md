# stellar-content



<!-- Auto Generated Below -->


## Usage

### Block

<stellar-tabs block>
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>


### Block-sizes

<stellar-tabs size="tiny" block>
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>

<stellar-tabs size="small" block>
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>

<stellar-tabs block>
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>

<stellar-tabs size="medium" block>
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>

<stellar-tabs size="large" block>
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>


### Default

<stellar-tabs>
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>


### Sizes

<stellar-tabs size="tiny">
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>

<stellar-tabs size="small">
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>

<stellar-tabs>
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>

<stellar-tabs size="medium">
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>

<stellar-tabs size="large">
  <stellar-tab>
    <stellar-asset name="person"></stellar-asset>
    Profile
  </stellar-tab>
  <stellar-tab open>Details</stellar-tab>
  <stellar-tab>Payment</stellar-tab>
  <stellar-tab>
    <stellar-avatar size="tiny" shape="circle" notooltip name="William M. Riley"></stellar-avatar>
    William M. Riley
  </stellar-tab>
</stellar-tabs>



## Properties

| Property      | Attribute     | Description | Type                                       | Default     |
| ------------- | ------------- | ----------- | ------------------------------------------ | ----------- |
| `behavior`    | `behavior`    |             | `string`                                   | `undefined` |
| `block`       | `block`       |             | `boolean`                                  | `false`     |
| `height`      | `height`      |             | `string`                                   | `undefined` |
| `name`        | `name`        |             | `string`                                   | `undefined` |
| `noanimation` | `noanimation` |             | `boolean`                                  | `false`     |
| `size`        | `size`        |             | `"large" \| "medium" \| "small" \| "tiny"` | `undefined` |
| `vertical`    | `vertical`    |             | `boolean`                                  | `false`     |


## Methods

### `blurring() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `contents() => Promise<any[]>`



#### Returns

Type: `Promise<any[]>`



### `tabs() => Promise<any[]>`



#### Returns

Type: `Promise<any[]>`




## Dependencies

### Depends on

- [stellar-blur](../../motion/blur)

### Graph
```mermaid
graph TD;
  stellar-tabs --> stellar-blur
  style stellar-tabs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

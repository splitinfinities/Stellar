# stellar-button



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-dropdown>
	<stellar-button ghost slot="handle">Account</stellar-button>
	<stellar-item>
		<stellar-avatar name="William M. Riley" size="small" notooltip></stellar-avatar>
		Your Account
	</stellar-item>
	<stellar-item>Billing</stellar-item>
	<stellar-item selectable="false" slot="footer">
		<stellar-button pill outline block size="tiny" padding="small">Sign out</stellar-button>
	</stellar-item>
</stellar-dropdown>


### Positioning

<stellar-dropdown position="left">
	<stellar-button ghost slot="handle">Account</stellar-button>
	<stellar-item>
		<stellar-avatar name="William M. Riley" size="small" notooltip></stellar-avatar>
		Your Account
	</stellar-item>
	<stellar-item>Billing</stellar-item>
	<stellar-item>Settings</stellar-item>
	<stellar-item selectable="false" slot="footer">
		<stellar-button pill outline block size="tiny" padding="small">Sign out</stellar-button>
	</stellar-item>
</stellar-dropdown>

<br />

<stellar-dropdown position="right">
	<stellar-button ghost slot="handle">Account</stellar-button>
	<stellar-item>
		<stellar-avatar name="William M. Riley" size="small" notooltip></stellar-avatar>
		Your Account
	</stellar-item>
	<stellar-item>Billing</stellar-item>
	<stellar-item>Settings</stellar-item>
	<stellar-item selectable="false" slot="footer">
		<stellar-button pill outline block size="tiny" padding="small">Sign out</stellar-button>
	</stellar-item>
</stellar-dropdown>



## Properties

| Property   | Attribute  | Description | Type                            | Default      |
| ---------- | ---------- | ----------- | ------------------------------- | ------------ |
| `icon`     | `icon`     |             | `boolean`                       | `false`      |
| `label`    | `label`    |             | `string`                        | `"Dropdown"` |
| `open`     | `open`     |             | `boolean`                       | `false`      |
| `position` | `position` |             | `"center" \| "left" \| "right"` | `"center"`   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

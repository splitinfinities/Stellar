# stellar-steps



<!-- Auto Generated Below -->


## Usage

### Default

<stellar-card>
	<header flush>
		<stellar-steps name="awesome">
			<stellar-step href="#one" open>One</stellar-step>
			<stellar-step href="#two">Two</stellar-step>
			<stellar-step href="#three">Three</stellar-step>
		</stellar-steps>
	</header>
	<section>
		<stellar-content for="awesome" name="one" open>
			<copy-wrap>
				<h1>Step one!</h1>
				<h3>Very good!</h3>
			</copy-wrap>
		</stellar-content>
		<stellar-content for="awesome" name="two">
			<copy-wrap>
				<h1>Step Two!</h1>
				<h3>Very good!</h3>
			</copy-wrap>
		</stellar-content>
		<stellar-content for="awesome" name="three">
			<copy-wrap>
				<h1>Step Three!</h1>
				<h3>Very good!</h3>
			</copy-wrap>
		</stellar-content>
	</section>
</stellar-card>



## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `name`   | `name`    |             | `string` | `undefined` |


## Methods

### `contents() => any[]`



#### Returns

Type: `any[]`



### `steps() => any[]`



#### Returns

Type: `any[]`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

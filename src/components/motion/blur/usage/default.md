<stellar-blur class="example mb4 db">
	<copy-wrap>
		<h1>Awesome~</h1>
		<h2 alt>Change the values below to see the blurring changes.</h2>
	</copy-wrap>
</stellar-blur>
<stellar-grid cols="1" class="theme-gray">
	<stellar-input type="number" max="50" min="0" placeholder="Vertical" onChange="document.querySelector('stellar-blur.example').vertical = this.value;"></stellar-input>
	<stellar-input type="number" max="50" min="0" placeholder="Horizontal" onChange="document.querySelector('stellar-blur.example').horizontal = this.value;"></stellar-input>
</stellar-grid>

<script lang="ts">
	export let placeholderText = '';
	export let type = 'text';
</script>

<input
	class="input {$$props.class}"
	{type}
	placeholder={placeholderText}
/>

<style lang="scss">
	.input {
		padding: 0 10px;
		font-family: 'Roboto', serif;
		color: var(--white);
		border: 1px solid var(--black);
		border-radius: 5px;

		&::placeholder {
			color: var(--black);
		}

		&:focus-visible {
			outline: none;
		}
	}
</style>

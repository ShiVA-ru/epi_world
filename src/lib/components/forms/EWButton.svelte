<script lang="ts">
	export let buttonType: 'button' | 'submit' = 'button';
</script>

<button class="button {$$props.class}" type={buttonType} on:click>
	<slot />
</button>

<style lang="scss">
	.button {
		padding: 7px 5px;
		line-height: 1;
		border: none;
		border-radius: 5px;

		&:focus-visible {
			outline: none;
		}
	}
</style>

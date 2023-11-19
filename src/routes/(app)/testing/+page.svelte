<script>
	import EwQuation from "./EWQuation.svelte";
    export let data;
</script>

<section>
	<div class="test">
		{#each data.summaries as { numQuation, quation, answer }}
			<EwQuation
				numQuation={numQuation}
				quation={quation}
				answer={answer}
			/>
		{/each}
	</div>
</section>

<style>
	:global(.button) {
        width: 100%;
		background-color: var(--primary);;
        border-radius: 20px;
        color: white;
        margin-top: 20px;
        margin-bottom: 50px;
        padding: 10px 0;
	}
	section {
		display: flex;
        flex-direction: column;
        gap: 20px;
		
		border-radius: 16px;
		background: #EFE5FF;
		/* background-attachment: fixed; */
	}
</style>

<script>
	import Question from "../../../lib/components/testing/question.svelte";
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
	section {
		padding: 0 5%;
		display: flex;
        flex-direction: column;
        gap: 20px;
		
		border-radius: 16px;
		background: #EFE5FF;
		/* background-attachment: fixed; */
	}
</style>

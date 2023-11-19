<script>
	import EwButton from "$lib/components/forms/EWButton.svelte";
	import EwQuation from "./EWQuation.svelte";
    export let data;
</script>

<section>
	<div class="test">
		{#each data.summaries as { numQuation, quation, answer1, answer2, answer3 }}
			<EwQuation
				numQuation={numQuation}
				quation={quation}
				answer1={answer1}
				answer2={answer2}
				answer3={answer3}
			/>
		{/each}
	</div>
	<a href="/child-account/">
		<EwButton class="button__test mx-auto">Завершить тест</EwButton>
	</a>
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

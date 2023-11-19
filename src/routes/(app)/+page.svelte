<script>

	// 	const userRes = await getUserByToken(data.token);
	// 	const currUser = await userRes.json();
	// 	user = currUser
	// });
</script>

<section>
	{#if user}
		<div>user</div>
	{:else}
		<div>not user</div>
	{/if}
</section>




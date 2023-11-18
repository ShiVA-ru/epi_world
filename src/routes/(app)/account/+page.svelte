<script>
	import Accept from '$glib/components/profile/accept.svelte';
	import AddChild from '$glib/components/profile/AddChild.svelte';

	let isChild = false;

	function handleMessage(event) {
		isChild = event.detail.isChild;
	}
</script>

<section>
	<div class="profile">
		<img
			src=""
			alt="profile"
		/>
		<div class="info">
			<div class="name">Иван Иванов</div>
			<hr />
			<div class="phone">+89322556893</div>
		</div>
	</div>

	{#if isChild}
		<Accept />
	{:else}
		<AddChild on:addChild={handleMessage} />
	{/if}
</section>

<style>
	.profile {
		display: flex;
		margin-bottom: 40px;
	}

	.profile img {
		border-radius: 50%;
		width: 111px;
		height: 111px;
		margin-right: 20px;
		background: gray;
	}

	.profile .info {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.profile .info .name {
		color: #2c2c2c;
		font-size: 21px;
		font-style: normal;
		font-weight: 700;
		line-height: 22px;
		letter-spacing: -0.4px;
		margin-bottom: 6px;
	}

	.profile .info .phone {
		margin-top: 10px;
		color: #000;
		font-size: 15px;
		font-style: normal;
		font-weight: 300;
		line-height: 22px;
		letter-spacing: -0.4px;
	}

	.add-child-form {
		width: 100%;
		flex-shrink: 0;
		border-radius: 16px;
		background: #efe5ff;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50px 32px;
	}

	.add-child-form .title {
		color: #000;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: -0.27px;
		margin-bottom: 34px;
	}

	input {
		border-radius: 11px;
		border: 1px solid #42049f;
		background: #fff;
		width: 240px;
		height: 38px;
		flex-shrink: 0;
		padding: 10px;
		margin-bottom: 15px;
	}

	button {
		width: 165px;
		height: 43px;
		flex-shrink: 0;
		border-radius: 20px;
		background: #7f18af;
		color: #fff;
		font-size: 17px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.255px;
		margin-top: 15px;
	}
</style>

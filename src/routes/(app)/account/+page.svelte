<script>
	import { goto } from '$app/navigation';
	import Accept from '$lib/components/profile/accept.svelte';
	import AddChild from '$lib/components/profile/AddChild.svelte';
	import Info from '../../../lib/components/profile/info.svelte';

	let isChild = false;

	function handleMessage(event) {
		isChild = event.detail.isChild;
	}

	const logoutHandle = () => {
		goto('/logout');
	};
</script>

<section>
	<div class="header">
		<button on:click={logoutHandle}>
			<img
				class="exit"
				src="/icons/exit.svg"
				alt="exit"
			/>
		</button>
	</div>
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

	<!-- {#if localStorage.getItem("isChild")} -->
	{#if isChild}
		<Accept />
		<Info />
	{:else}
		<AddChild on:addChild={handleMessage} />
	{/if}
</section>

<style>
	.header {
		display: flex;
		justify-content: end;
	}

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
</style>

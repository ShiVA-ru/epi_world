<script>
	import Accept from '$lib/components/profile/accept.svelte';
	import AddChild from '$lib/components/profile/AddChild.svelte';
	import Info from '$lib/components/profile/info.svelte';
	import EwPicture from './EWPicture.svelte';
	import EWButton from '$lib/components/forms/EWButton.svelte';
	export let data;

	let isChild = false;

	function handleMessage(event) {
		isChild = event.detail.isChild;
	}
</script>

<section>
	<div class="profile">
		<img
			class="profile__img"
			src=""
			alt="profile"
		/>
		<div class="profile__info">
			<p class="profile__name">Максим Иванов</p>
			<hr />
			<p class="profile__parent">Родитель:<br />Иван Иванов</p>
		</div>
	</div>
	<div class="profile__wrapper">
		<h2 class="profile__subtitle">Твои рисунки</h2>
		<div class="profile__items">
			{#each data.summaries.slice(0, 4) as { slug, imgSrc, title, date }}
				<a href="/pictures/{slug}">
					<EwPicture
						{imgSrc}
						text={title}
						{date}
					/>
				</a>
			{/each}
		</div>
		<a href="/pictures/">
			<EWButton class="button">Все рисунки</EWButton>
		</a>
	</div>
</section>

<style lang="scss">
	:global(.button) {
		width: 100%;
		background-color: var(--primary);
		border-radius: 20px;
		color: white;
		margin-top: 20px;
		padding: 10px 0;
	}

	.profile {
		display: flex;
		margin-bottom: 40px;

		&__img {
			border-radius: 50%;
			width: 111px;
			height: 111px;
			margin-right: 20px;
			background: gray;
		}

		&__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		&__name {
			color: #2c2c2c;
			font-size: 21px;
			font-style: normal;
			font-weight: 700;
			line-height: 22px;
			margin-bottom: 6px;
		}

		&__parent {
			margin-top: 10px;
			color: var(--black);
			font-size: 15px;
			font-style: normal;
			font-weight: 300;
			line-height: 22px;
		}

		&__wrapper {
			padding: 20px 10px;
			background-color: var(--lighter);
			border-radius: 16px;
		}

		&__subtitle {
			text-align: center;
		}

		&__items {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

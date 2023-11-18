<script lang="ts">
	export let placeholderText = '';
	export let type = 'text';

	const link = '/auth/child';
	let isCopied = false;

	const copyLinkHandle = async () => {
		await navigator.clipboard.writeText(link);
		isCopied = true;
		setTimeout(() => {
			isCopied = false;
		}, 3000);
	};
</script>

<form class="add-child-form">
	<div class="title">Ребенок успешно добавлен</div>
	<p>Скопируйте ссылку и отправьте ребенку что бы зарегистрировать его</p>
	<p>Как только ребенок будет зарегистрирован, вы сможете пользоваться сервисом</p>
	<div class="link">https://www.figma.com/file/zfiNupA...</div>
	<button on:click|preventDefault={copyLinkHandle}
		>{isCopied ? 'Ссылка скопированна' : 'Копировать ссылку'}</button
	>
</form>

<style lang="scss">
	section {
		padding: 30px;
	}

	.add-child-form {
		width: 100%;
		flex-shrink: 0;
		border-radius: 16px;
		background: #d6ffe6;
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

	.link {
		margin-top: 35px;
		border-radius: 11px;
		border: 1px solid #42049f;
		background: #fff;
		width: 240px;
		height: 38px;
		flex-shrink: 0;
		padding: 10px;
		margin-bottom: 15px;
		overflow: hidden;
	}

	button {
		width: 165px;
		height: 43px;
		flex-shrink: 0;
		border-radius: 20px;
		background: #3ea969;
		color: #fff;
		text-align: center;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.21px;
	}
</style>

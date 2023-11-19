<script>
	import MyMessage from '$lib/components/forum/MyMessage.svelte';
	import NotMyMessage from '$lib/components/forum/NotMyMessage.svelte';
	import { chat } from '$lib/components/forum/forumList.js';
	import { beforeUpdate, afterUpdate } from 'svelte';

	let localChat = Object.assign(chat);
	let inputText = '';

	function submitHandler(event) {
		localChat.push({
			author: 'Вы',
			date: '20:13 20.06.23',
			messageText: inputText
		});
		localChat = [...localChat];
		inputText = '';
	}

	let div;
	let autoscroll = false;

	beforeUpdate(() => {
		if (div) {
			const scrollableDistance = div.scrollHeight - div.offsetHeight;
			autoscroll = div.scrollTop > scrollableDistance - 20;
			console.log(div.scrollTop);
		}
	});

	afterUpdate(() => {
		if (autoscroll) {
			div.scrollTo(0, div.scrollHeight);
		}
	});
</script>

<div
	class="message"
	bind:this={div}
>
	<h1 class="main-title">Общение со специалистом</h1>

	<div class="message-list">
		{#each localChat as message}
			{#if message.author !== 'Вы'}
				<NotMyMessage
					name={message.author}
					date={message.date}
					messageText={message.messageText}
				/>
			{:else}
				<MyMessage
					name={message.author}
					date={message.date}
					messageText={message.messageText}
				/>
			{/if}
		{/each}
	</div>
</div>
<form
	class="form"
	on:submit|preventDefault={submitHandler}
>
	<input
		class="form__input"
		placeholder="Введите сообщение"
		bind:value={inputText}
	/>
</form>

<style lang="scss">
	.message {
		height: calc(100vh - 200px);
		position: relative;
		overflow: auto;
	}
	.main-title {
		margin-bottom: 25px;
		color: var(--black);
		font-size: 20px;
		font-weight: 600;
	}

	.message-list {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.form {
		width: 100%;
		&__input {
			margin-top: 20px;
			padding: 17px 34px;
			width: 100%;
			border-radius: 12px;
			border: 2px solid #7f18af;
		}
	}
</style>

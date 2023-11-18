<script>
	export let name = '';
	export let date = '';
	export let messageText = '';
</script>

<div class="message">
	<p class="message__name">{name}</p>
	<p class="message__date">{date}</p>
	<p class="message__text">{messageText}</p>
</div>

<style lang="scss">
	.message {
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: 5px;

		&__name {
			color: var(--black);
			font-size: 18px;
		}

		&__date {
			color: #808080;
			font-size: 14px;
		}

		&__text {
			padding: 18px 14px;
			padding-left: 18px;
			width: 288px;
			font-size: 18px;
			line-height: 22px;
			border-radius: 20px;
			color: var(--black);
			background: #efefef;
		}
	}
</style>

<script lang="ts">
	export let imgSrc: string;
	export let text: string;
	export let date: string;
</script>

<div class="picture-item">
	<div class="wrapper">
		<img
			class="picture"
			src={imgSrc}
			alt="pic"
		/>
	</div>

	<h4 class="title">{text}</h4>
	<p class="date">{date}</p>
</div>

<style>
	.picture-item {
		padding-top: 30px;
	}
	.wrapper {
		border-radius: 12px;
		background-color: white;
		border: 1px solid #000;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70px;
		height: 70px;
	}
	.picture {
		width: 70%;
		height: 70%;
	}
	.title {
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
	}
	.date {
		color: #7b7b7b;
		font-size: 10px;
		font-style: normal;
		font-weight: 400;
	}

	.picture-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<script>
	import EwButton from '../lib/components/forms/EWButton.svelte';
	import EwInput from '../lib/components/forms/EWInput.svelte';
</script>

<h1>Главная страница</h1>

<EwButton class="button">Я кнопка</EwButton>
<EwInput
	placeholderText="Введите пароль"
	type="text"
/>

<style lang="scss">
	:global(.button) {
		width: 80px;
		background-color: var(--light);
	}
</style>

<script>
	import '../../app.css';
	import Navbar from '../../lib/components/navbar/navbar.svelte';
	import { getUser } from './../../lib/api/api.js';
	import { onMount } from 'svelte';

	export let data;

	const token = data.token;
	let isAuth = false;

	onMount(async () => {
		if (!token) {
			return;
		}
		const userRes = await getUser(1);
		const user = await userRes.json();
		console.log('res', user);
	})

</script>

<div class="container">
	<slot />
</div>

<Navbar />

<!-- <ul>
	<li><a href="/">Главная страница</a></li>
	<li><a href="/account">Обратная связь</a></li>
	<li><a href="/feedback">Личный кабинет</a></li>
	<li><a href="/paint">Арттерапия</a></li>
	<li><a href="/tests">Тесты</a></li>
</ul> -->



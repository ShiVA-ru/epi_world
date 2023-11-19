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
	});
</script>

<div class="container">
	<slot />
</div>

<Navbar />

<style>
	.container {
		padding-left: 30px;
		padding-right: 30px;
		padding-top: 30px;
	}
</style>

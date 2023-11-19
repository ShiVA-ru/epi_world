<script>
	import { getUserByToken } from './../../lib/api/api.js';
	import ChildNavbar from './../../lib/components/navbar/childNavbar.svelte';
	import { onMount } from 'svelte';
	import '../../app.css';
	import Navbar from '../../lib/components/navbar/navbar.svelte';
	import userStore from './../(app)/storeUser.js';
	import { get } from 'svelte/store';

	export let data;

	const user = get(userStore);

	onMount(async () => {
		if (!data.token) return;

		try {
			const userRes = await getUserByToken(data.token);
			const currUser = await userRes.json();

			userStore.update(() => {
				return currUser;
			});
		} catch (error) {
			console.error(error);
		}
	});
</script>

<div class="container">
	<slot />
</div>

{#if $userStore}
	{#if user?.isChild}
		<ChildNavbar />
	{:else}
		<Navbar />
	{/if}
{:else}
	""
{/if}

<style>
	.container {
		padding-left: 30px;
		padding-right: 30px;
		padding-top: 30px;
	}
</style>

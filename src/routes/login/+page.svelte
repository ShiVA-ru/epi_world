<script>
	import { goto } from '$app/navigation';
	import '../../app.css';
	import { registerUser } from '../../lib/api/api';
	import ThirdPartyAuth from '../../lib/components/login/ThirdPartyAuth.svelte';
	import userStore from '../(app)/storeUser.js';

	let isError = false;

	async function sumbitHanler(event) {
		isError = false;

		let formData = new FormData(event.target);
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		try {
			let response = await registerUser(data);
			const currUser = await response.json();
			const user = currUser.user

			if (!currUser.jwt) {
				isError = true;
				return;
			}

			userStore.update(() => {
				return user
			})

			document.cookie = `token=${currUser.jwt}`;
			goto('/account');
		} catch (error) {
			isError = true;
			console.error('Err: ', error);
		}
	}
</script>

<div class="container">
	<header class="header">
		<img
			src="logo.png"
			alt="Логотип"
			width="150"
		/>
	</header>
	<h1 class="main-title">Вход</h1>

	<form
		class="form"
		on:submit={sumbitHanler}
	>
		<label class="form__label">
			Логин*
			<input
				class="form__input"
				name="identifier"
				type="text"
				placeholder="Ваш логин"
				required
			/>
		</label>
		<label class="form__label">
			Пароль*
			<input
				class="form__input"
				name="password"
				type="password"
				placeholder="Ваш пароль"
				required
			/>
		</label>

		<button class="form__button">Войти</button>
		{#if isError}
			<div class="error">Не удалось войти <br /> Неверный логин или пароль</div>
		{/if}
	</form>

	<a
		href="/registration"
		class="registration-link">Регистрация</a
	>

	<ThirdPartyAuth />
</div>

<style lang="scss">
	.error {
		margin-top: 10px;
		text-align: center;
		color: rgb(137, 53, 53);
	}

	.container {
		padding: 0 28px;
		margin-bottom: -60px;
	}

	.header {
		display: flex;
		justify-content: center;
	}

	.main-title {
		margin-bottom: 37px;
		text-align: center;
		color: var(--black);
		font-size: 20px;
		font-weight: 400;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 10px;

		&__label {
			display: grid;
			grid-template-columns: 76px 1fr;
			align-items: center;
			font-size: 15px;
		}

		&__input {
			padding: 14px 9px;
			font-size: 20px;
			border-left: 1px solid #bebdcb;

			&:focus-visible {
				outline: none;
			}
		}

		&__button {
			margin-top: 40px;
			padding: 15px;
			color: white;
			border-radius: 20px;
			background-color: var(--primary);
		}
	}

	.registration-link {
		display: block;
		margin-bottom: 70px;
		text-align: center;
		color: var(--light);
		font-size: 16px;
		font-weight: 400;
	}
</style>

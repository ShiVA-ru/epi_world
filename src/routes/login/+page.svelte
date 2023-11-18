<script>
	import EwButton from '$lib/components/forms/EWButton.svelte';
	import EwInput from '$lib/components/forms/EWInput.svelte';
</script>

<div class="container">
	<header class="header">
		<img
			src="logo.png"
			alt="Логотип"
			width="151"
		/>
	</header>
	<h1 class="main-title">Вход</h1>

	<form class="form">
		<label class="form__label">
			Логин
			<input
				class="form__input"
				name="login"
				type="text"
				placeholder="Ваш логин"
				required
			/>
		</label>
		<label class="form__label">
			Пароль
			<input
				class="form__input"
				name="password"
				type="password"
				placeholder="Ваш пароль"
				required
			/>
		</label>

		<button class="form__button">Войти</button>
	</form>

	<div class="third-party-auth">
		<p class="third-party-auth__title">Войти с помощью</p>
		<div class="third-party-auth__links">
			<a
				href="google.com"
				class="third-party-auth__link"
			>
				<img
					src="/icons/google.svg"
					alt="Лого google"
				/>
			</a>
			<a
				href="ya.ru"
				class="third-party-auth__link"
			>
				<img
					src="/icons/yandex.png"
					alt="Лого yandex"
				/>
			</a>
		</div>
		<a href="/">Не удается зайти</a>
	</div>
</div>

<style lang="scss">
	.container {
		padding: 0 28px;
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
		margin-bottom: 80px;

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

	.third-party-auth {
		&__title {
			margin-bottom: 50px;
			text-align: center;
			color: var(--light);
			font-size: 16px;
			font-weight: 400;
		}

		&__links {
			display: flex;
			gap: 45px;
			align-items: center;
		}
	}
</style>

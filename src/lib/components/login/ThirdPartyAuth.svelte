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
	<a
		class="third-party-auth__forget-link"
		href="/">Не удается зайти</a
	>
</div>

<style lang="scss">
	.third-party-auth {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 50px;

		&__title {
			// margin-bottom: 50px;
			// text-align: center;
			color: var(--light);
			font-size: 16px;
			font-weight: 400;
		}

		&__links {
			display: flex;
			gap: 45px;
			align-items: center;
		}

		&__forget-link {
			color: var(--light);
			font-size: 16px;
			font-weight: 400;
		}
	}
</style>

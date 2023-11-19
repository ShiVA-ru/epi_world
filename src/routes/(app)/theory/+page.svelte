<script>
</script>

<div class="theory">
	<h1 class="theory__title">Теория</h1>
	<div class="theory__wrapper">
		<h2 class="theory__subtitle">Материалы для изучения</h2>
		<ul class="theory__list">
			<li class="theory__item">
				<a
					class="theory__link"
					href="https://clck.ru/36f367">Пособие пациенту страдающему эпилепсией</a
				>
			</li>
			<li class="theory__item">
				<a
					class="theory__link"
					href="https://clck.ru/36f38d">Инвалидность при эпилепсии</a
				>
			</li>
			<li class="theory__item">
				<a
					class="theory__link"
					href="https://psychiatr.ru/education/42">Пособие для детей с эпилепсией и их родителей</a
				>
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.theory {
		&__title {
			margin-bottom: 25px;
			color: var(--black);
			font-size: 20px;
			font-weight: 600;
		}

		&__wrapper {
			padding: 12px;
			border-radius: 16px;
			background-color: var(--lighter);
		}

		&__list {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}

		&__item {
			border-bottom: 1px solid var(--dark);
		}

		&__subtitle {
			margin-bottom: 20px;
			font-size: 18px;
			font-weight: 500;
		}

		&__link {
			color: var(--dark);
			font-size: 15px;
			font-weight: 700;
		}
	}
</style>

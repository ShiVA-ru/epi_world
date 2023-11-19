<nav class="nav-bar">
	<ul class="links">
		<li class="link">
			<a href="/statistic">
				<img
					src="/icons/diagnostic.svg"
					alt="Диагностика"
				/>
				<span>Диагностика</span>
			</a>
		</li>
		<li class="link">
			<a href="/feedback">
				<img
					src="/icons/forum.svg"
					alt="Форум"
				/>
				<span>Обратная связь</span>
			</a>
		</li>
		<li class="link">
			<a href="/account">
				<img
					src="/icons/profile.svg"
					alt="Профиль"
				/>
				<span>Профиль</span>
			</a>
		</li>
		<li class="link">
			<a href="/theory">
				<img
					src="/icons/book.svg"
					alt="Профиль"
				/>
				<span>Теория</span>
			</a>
		</li>
	</ul>
</nav>

<style>
	.nav-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 80px;
		background: #efe5ff;
		border-top: #4e1867 1px solid;
		display: flex;
		align-items: center;
	}

	.nav-bar .links {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.nav-bar .links .link {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 75px;
	}

	.nav-bar .links img {
		margin: 0 auto;
		width: 24px;
		height: 24px;
		margin-bottom: 3px;
	}

	.nav-bar .links a {
		color: #4e1867;
		text-align: center;
		font-size: 10px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.15px;
	}
</style>

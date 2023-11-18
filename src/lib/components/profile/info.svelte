
<div class="info">
	<div class="title">Информация о ребенке</div>
    <div class="item">
        <p>Имя</p>
        <b>Максимов Иван</b>
    </div>
    <div class="item">
        <p>Возраст</p>
        <b>9 лет</b>
    </div>
    <a href="/statistic">Диагностика</a>
</div>

<style lang="scss">
	section {
		padding: 30px;
	}

	.info {
		width: 100%;
		flex-shrink: 0;
		border-radius: 16px;
		background: #efe5ff;
		display: flex;
		flex-direction: column;
		padding: 30px 32px;
	}
    
    .item {
        margin-top: 10px;
    }

    .item p {
		color: #42049f;
    }

	.info .title {
		color: #000;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: -0.27px;
		margin-bottom: 34px;
	}

	a {
        margin-top: 19px;
		width: 100%;
		height: 43px;
        display: flex;
        align-items: center;
        justify-content: center;
		flex-shrink: 0;
		border-radius: 20px;
		background: #42049f;
		color: #fff;
		text-align: center;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.21px;
	}
</style>

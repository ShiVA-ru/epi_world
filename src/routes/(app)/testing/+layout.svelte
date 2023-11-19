<div>
    <div class="picture__title flex items-center">
        <a href="/statistic">    
            <img src="/statistic/back.svg" class="picture-back" alt="bach">
        </a>
        <h2 class="picture-title">Тест 1</h2>
    </div>
    <slot />
</div>

<style>
    .picture-title{
        padding: 30px 5%;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
    }
    .test-title{
		color: #000;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		padding: 20px 0;
	}
</style>
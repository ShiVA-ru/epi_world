<script>
	import EwButton from "$lib/components/forms/EWButton.svelte";
    import EwPicture from "./EWPicture.svelte";

    export let data;
</script>

<section>
    <div class="statistic container mx-auto">
        <h2 class="statistic-title">Диагностика</h2>
        <h3 class="statistic-text">Рисунки вашего ребенка</h3>
        <p class="statistic__botton-text">Последние рисунки</p>
        <div class="statistic-item">
            {#each data.summaries.slice(0, 3) as { slug, imgSrc, title, date }}
                <a href="/pictures/{slug}">
                    <EwPicture
                        {imgSrc}
                        text={title}
                        {date}
                    />
                </a>
            {/each}
        </div>

        <a href="/pictures/">
            <EwButton class="button">Все рисунки</EwButton>
        </a>

        <h3 class="statistic-text">Интерактивные игры</h3>
        <p class="statistic__botton-text">Результаты</p>
        
        <a href="/testing/">
            <EwButton class="button__test mx-auto">Тест 1</EwButton>
        </a>
    </div>
</section>
    
<style lang="scss">
    :global(.button) {
        width: 100%;
		background-color: var(--primary);;
        border-radius: 20px;
        color: white;
        margin-top: 20px;
        margin-bottom: 50px;
        padding: 10px 0;
	}

    :global(.button__test) {
        width: 100%;
		background-color: #EFE5FF;
        border-radius: 20px;
        color: #42049F;
        margin-top: 20px;
        margin-bottom: 50px;
        padding: 10px 0;
        // text-align: left;
	}

    .statistic{
        &-title{
            padding: 30px  0;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px;
        }
        &-text{
            color: #000;
            font-size: 21px;
            font-style: normal;
            font-weight: 400;
        }
        &__botton-text{
            color: #969696;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
        }
        &-item{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
    
</style>
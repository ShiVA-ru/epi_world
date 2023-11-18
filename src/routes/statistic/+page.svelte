<script>
	import EwButton from "../../lib/components/forms/EWButton.svelte";
    import EwPicture from "./EWPicture.svelte";

    export let data;
</script>

<div class="statistic container mx-auto">
    <h2 class="statistic-title">Диагностика</h2>
    
    <h3 class="statistic-text">Рисунки вашего ребенка</h3>
    <div class="statistic-item">
        {#each data.summaries as { slug, imgSrc, title, date }}
            <a href="/pictures/{slug}">
                <EwPicture 
                    imgSrc={imgSrc}
                    text={title}
                    date={date}
                />
            </a>
        {/each}
    </div>

    <a href="/pictures/">
        <EwButton class="button">Все рисунки</EwButton>
    </a>

    <h3 class="statistic-text">Интерактивные игры</h3>
    <p class="statistic__botton-text">Результаты</p>
    
    <a href="/tests/">
        <EwButton class="button__test">Все тесты</EwButton>
    </a>

</div>
    
<style lang="scss">
    :global(.button) {
        width: 100%;
		background-color: #EFE5FF;
        border-radius: 20px;
        color: #42049F;
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
	}

    .statistic{
        padding: 0 30px;
        &-title{
            padding: 30px  0;
            font-size: 24px;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px;
        }
        &-item{
            display: grid;
            gap: 30px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            grid-template-rows: 1fr;
            grid-auto-rows: 0;
            overflow-y: hidden;
            row-gap: 0;
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
    }
    
</style>
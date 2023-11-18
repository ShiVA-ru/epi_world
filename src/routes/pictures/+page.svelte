<script lang="ts">
	import EwPicture from "../statistic/EWPicture.svelte";
    export let data;
</script>

<div class="picture container mx-auto items-center justify-center">
    <a href="/statistic">    
        <img src="/statistic/back.svg" class="picture-back" alt="bach">
    </a>
    <h2 class="picture-title">Все рисунки</h2>
    <div class="picture-item">
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
</div>

<style>
    .picture{
        padding: 30px 30px;
    }

    .picture-title{
        padding: 30px  0;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
    }

    .picture-item{
        display: grid;
        gap: 35px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        overflow: auto;
        margin-bottom: 80px;
    }
</style>
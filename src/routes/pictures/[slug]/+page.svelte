<script>
	export let data;
</script>

<div class="picture container max-auto">
    <a href="/pictures">    
        <img src="/statistic/back.svg" class="picture-back" alt="bach">
    </a>
    <h2 class="picture-title">{data.post.title}</h2>
    <p class="picture-date">{data.post.date}</p>

    <div class="picture-wrapper">
        <img class="imagine" src={data.post.imgSrc} alt="pic">
    </div>

    <p class="picture-date">Вот что нарисовал ваш ребенок</p>

</div>

<style>
    .picture{
        padding: 30px 30px;
    }

    .picture-title{
        padding-top: 15px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
    }

    .picture-date {
        color: #7B7B7B;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        padding-bottom: 30px;
    }

    .picture-wrapper{
        border-radius: 12px;
        border: 1px solid #000;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 275px;
        height: 300px;
    }

    .imagine {
        width: 70%;
        height: 70%;
    }
</style>
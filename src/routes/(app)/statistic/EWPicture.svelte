<script lang="ts">
	export let imgSrc: string;
	export let text: string;
	export let date: string;
</script>

<div class="container mx-auto">
    <div class="wrapper">
        <img class="picture" src={imgSrc} alt="pic">
    </div>

    <h4 class="title">{text}</h4>
    <p class="date">{date}</p>
</div>

<style>
    .container{
        padding-top: 15px;
    }
    .wrapper{
        border-radius: 12px;
        border: 1px solid #000;
        background-size: contain;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
    }
    .picture {
        width: 70%;
        height: 70%;
    }
    .title {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }
    .date {
        color: #7B7B7B;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
    }
</style>
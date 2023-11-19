<script lang="ts">
	export let numQuation: string;
	export let quation: string;
	export let answer: string;
</script>

<div class="picture-item">
	<h4 class="picture-numQuation">{numQuation}</h4>
	<h4 class="picture-quation">{quation}</h4>
	<p class="picture-answerTitle">Ответ</p>
	<p class="picture-answer">{answer}</p>
    <div class="picture-line"></div>
</div>

<style>
    .picture-item {
        display: flex;
        flex-direction: column;
        padding: 5% 0;
    }
    .picture-numQuation {
        padding-bottom: 2%;
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
    }
    .picture-quation {
        color: #6A6A6A;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
    }

    .picture-answerTitle {
        padding-top: 10%;
        color: #3B117A;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
    }
    .picture-answer {
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        padding-bottom: 10%;
    }
    .picture-line {
        width: 95%;
        height: 1px;
        border: 1px solid #A0A0A0;
    }
</style>

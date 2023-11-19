<script lang="ts">
	export let numQuation: string;
	export let quation: string;
	export let answer1: string;
	export let answer2: string;
	export let answer3: string;
</script>

<div class="picture-item">
	<h4 class="picture-numQuation">{numQuation}</h4>
	<h4 class="picture-quation">{quation}</h4>
    
	<p class="picture-answerTitle">Ответы</p>

    <div class="picture-answer container">
        <input type="checkbox">
        <span>{answer1}</span>
    </div>
    <div class="picture-answer container">
        <input type="checkbox">
        <span>{answer2}</span>
    </div>
    <div class="picture-answer container">
        <input type="checkbox">
        <span>{answer3}</span>
    </div>

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
        padding-bottom: 2%;
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
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 15px;
    }
    .picture-line {
        width: 95%;
        height: 1px;
        border: 1px solid #A0A0A0;
    }
</style>

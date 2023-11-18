<script lang="ts">
	export let imgSrc: string;
	export let text: string;
	export let date: string;
</script>

<div class="container mx-auto"> 
    <h2>
        {text}
    </h2>
    <a href="/all_pictures/">
        <img src={imgSrc} alt="pic">
    </a>
</div>
        
<script>
    import { fade } from 'svelte/transition';

    export let data;
</script>
{#key data.route.id}
<div class="animation" in:fade={{delay : 200, duration : 200}} out:fade={{delay : 0, duration : 200}} >
    <slot/>
</div>    
{/key}
<footer>
    All rights reserved © Varma Funds International
</footer>
<style scoped>
    .animation{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    :global(*){
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :global(body){
        min-height: 100vh;
        font-family: sans-serif;
        background-image: url("kepek/background.jpg");
        background-size: cover;
    }
    
    footer{
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        color: rgb(230, 230, 230);
    }
</style>
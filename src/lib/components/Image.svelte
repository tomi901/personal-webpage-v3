<script lang="ts">
    export let images: { src: string, alt: string }[];
    export let footer: string = "";
    export let height: string | undefined = undefined;
</script>

<div class="parent-container">
    <div class="img-container" style:height={height}>
        {#each images as image}
            <img loading="lazy" src={image.src} alt={image.alt} />
        {/each}
    </div>
    {#if footer && footer !== ""}
        <p>{footer}</p>
    {/if}
</div>

<style>
    .parent-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 24px 0;
    }

    .img-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 24px;
        max-width: 100%;
    }

    img {
        height: 100%;
        width: auto;
        max-width: 100%;
    }

    p {
        color: #444444;
        text-align: center;
        margin: 12px 0 0 0;
    }
</style>

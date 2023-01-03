<script lang="ts">
    export let _class: string = "";
    export let footer: string = "";
    export let maxHeight: string | undefined = undefined;
</script>

<div class={`parent-container ${_class}`}>
    <div class="img-container" style:max-height={maxHeight}>
        <slot />
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
    }

    .img-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 100%;
        gap: 25px
    }

    .img-container :global(*) {
        max-width: 100%;
        max-height: 100%;
    }

    p {
        color: #444444;
        text-align: center;
    }
</style>

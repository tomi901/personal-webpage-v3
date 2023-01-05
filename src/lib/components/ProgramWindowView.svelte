<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { scale } from 'svelte/transition';

    const dispatch = createEventDispatcher();

    export let title = "Window";
    export let height = 200;
    export let width = 300;
    export let x = 100;
    export let y = 100;

    function asCssPosition(n: number) {
        return `${n}px`;
    }
</script>

<div class="window"
    style:height={asCssPosition(height)}
    style:width={asCssPosition(width)}
    style:top={asCssPosition(y)}
    style:left={asCssPosition(x)}
    transition:scale={{ duration: 100 }}
    >
    <header>
        <div class="window-info">
            <span>{title}</span>
        </div>
        <div class="window-buttons">
            <button on:click={() => dispatch('close')} class="close-btn"></button>
        </div>
    </header>
    <main>
        <slot />
    </main>
</div>

<style>
    .window {
        position: absolute;
        background-color: lightslategray;
        display: flex;
        flex-direction: column;

        transform-origin: 0% 0%;
    }

    header {
        height: 16px;
        padding: 4px 6px;
        display: flex;
        flex-direction: row;
        align-items: center;

        border: 12px solid transparent;
        border-image: url("/UI/window_header.png") 6 fill;
        image-rendering: crisp-edges;
    }

    .window-info {
        flex-grow: 1;
    }

    .window-buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .window-buttons>button {
        width: 24px;
        height: 24px;

        transition: filter 200ms;
    }

    button:hover {
        filter: brightness(110%);
    }
    
    .close-btn {
        border: none;
        background: url("/UI/close.png");
    }

    main {
        flex-grow: 1;
        background-color: white;

        border: 6px solid transparent;
        border-image: url("/UI/window_border.png") 3 round;
        image-rendering: crisp-edges;
    }
</style>

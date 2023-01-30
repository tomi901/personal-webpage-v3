<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { scale } from 'svelte/transition';

    const dispatch = createEventDispatcher();

    export let title = "Window";
    export let height = 200;
    export let width = 300;
    export let x = 100;
    export let y = 100;
    export let maximized = false;

    function asCssPosition(n: number) {
        return `${n}px`;
    }

    function toggleMaximized() {
        maximized = !maximized;
    }
</script>

<div class="window" class:maximized={maximized}
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
            <button on:click={toggleMaximized} class="maximize-btn" />
            <button on:click={() => dispatch('close')} class="close-btn" />
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

        transition: width, height, top, left;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @media (max-width: 800px) {
        .window {
            width: 100% !important;
            height: 100% !important;
            top: 0 !important;
            left: 0 !important;
        }

        .maximize-btn {
            display: none;
        }
    }

    .maximized {
        width: 100% !important;
        height: 100% !important;
        top: 0 !important;
        left: 0 !important;
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
        gap: 8px;
    }

    .window-buttons>button {
        width: 24px;
        height: 24px;

        transition: filter 200ms;
        border: none;
    }

    button:hover {
        filter: brightness(110%);
    }
    
    .close-btn {
        background: url("/UI/close.png");
    }

    :not(.maximized) .maximize-btn {
        background: url("/UI/maximize-on.png");
    }

    .maximized .maximize-btn {
        background: url("/UI/maximize-off.png");
    }

    main {
        flex-grow: 1;
        background-color: white;

        border: 6px solid transparent;
        border-image: url("/UI/window_border.png") 3 round;
        image-rendering: crisp-edges;

        overflow: auto;
    }

    main > :global(*) {
        image-rendering: auto;
    }
</style>

<script lang="ts">
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
    >
    <header>
        <div class="window-info">
            <span>{title}</span>
        </div>
        <div class="window-buttons">
            <button class="close-btn"></button>
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
    }

    header {
        height: 24px;
        padding: 4px 12px;
        background-color: slategray;
        display: flex;
        flex-direction: row;
        align-items: center;
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
    }

    main {
        overflow: scroll;
        flex-grow: 1;
    }
</style>

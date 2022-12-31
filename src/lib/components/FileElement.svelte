<script lang="ts">
    import type { File } from "../program/File";
    import { open } from "../program";
    import { getContextSystem } from "../program/system";

    export let info: File;
    const {
        name,
        icon,
        xPos,
        yPos,
    } = info;

    const contextSystem = getContextSystem();

    function asGridPos(n?: number) {
        return n !== undefined ? n + 1 : 1;
    }

    function onClick() {
        if (!contextSystem) {
            return console.error("No context system defined");
        }
        open(info, contextSystem);
    }
</script>

<div class="file"
    style:grid-column={asGridPos(xPos)}
    style:grid-row={asGridPos(yPos)}
    on:click={onClick}
    on:keypress={undefined}
    >
    <img alt={name} src={icon} />
    <p>{name}</p>
</div>

<style>
    .file {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }

    .file>img {
        height: 32px;
        margin-bottom: 8px;
    }

    .file>p {
        margin: 0;
        padding: 0;
        max-width: 100%;

        font-size: 0.9rem;

        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        max-lines: 2;
    }
</style>

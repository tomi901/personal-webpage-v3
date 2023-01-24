<script lang="ts">
    import type { ExecutableFile } from "../program/File";
    import { getContextSystem } from "../program/system";

    export let file: ExecutableFile;
    const {
        name,
        icon,
        xPos,
        yPos,
    } = file;

    const contextSystem = getContextSystem();
    const isUrl = typeof file.onOpen === "string";

    function asGridPos(n?: number) {
        return n !== undefined ? n + 1 : 1;
    }

    function onClick() {
        if (typeof file.onOpen === "string") {
            return;
        }
        console.assert(contextSystem, "No context system defined for this file element.");
        file.onOpen && file.onOpen(contextSystem);
    }
</script>

<a href={typeof file.onOpen === "string" ? file.onOpen : file.id}
    class="file"
    style:grid-column={asGridPos(xPos)}
    style:grid-row={asGridPos(yPos)}
    on:click={onClick}
    on:keypress={undefined}
    >
    <img alt={name} src={icon} />
    <p>{name}</p>
</a>

<style>
    .file {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        color: inherit;
        text-decoration: inherit;
    }

    .file>img {
        height: 48px;
        margin-bottom: 4px;
        image-rendering: crisp-edges;
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

<script lang="ts">
	import type { ExecutableFile } from "$lib/program/File";
	import FileElement from "./FileElement.svelte";

    export let files: ExecutableFile[]
</script>

<div class="files-container">
    {#each files as file}
        <FileElement file={file} />
    {/each}
</div>

<style>
    .files-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 64px);
        grid-auto-columns: 64px;
        grid-template-rows: repeat(auto-fill, 100px);
        grid-auto-rows: 100px;
        gap: 1rem;
    }
</style>

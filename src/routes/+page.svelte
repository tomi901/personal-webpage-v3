<script lang="ts">
	import FileElement from "$lib/components/FileElement.svelte";
	import WindowSystem from "$lib/components/WindowSystem.svelte";
    import files from "$lib/program/files";
</script>

<WindowSystem>
    <div class="files-container">
        {#each files as file}
            <FileElement info={file} />
        {/each}
    </div>
</WindowSystem>

<style>
    .files-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 64px);
        grid-auto-columns: 64px;
        grid-template-rows: repeat(auto-fill, 96px);
        grid-auto-rows: 96px;
        gap: 1rem;
        padding: 32px;
    }
</style>
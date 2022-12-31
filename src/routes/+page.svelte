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

<style global>
    .files-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 64px);
        grid-auto-columns: 64px;
        grid-template-rows: repeat(auto-fill, 96px);
        grid-auto-rows: 96px;
        gap: 1rem;
        padding: 32px;
    }

    :global(html) {
		background-color: hsl(164, 86%, 16%);
		color: rgb(254 243 199);
	}
	:global(body) {
		margin: 0;
	}
	:global(code) {
		font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
			Bitstream Vera Sans Mono, Courier New, monospace;
	}
</style>
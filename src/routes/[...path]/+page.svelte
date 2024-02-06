<script lang="ts">
	import FileContainer from "$lib/components/FileContainer.svelte";
	import WindowSystem from "$lib/components/WindowSystem.svelte";
    import files from "$lib/program/files/desktop";

	export let data;
</script>

<svelte:head>
    <title>Tomás Rinaldi's webpage</title>
</svelte:head>

<WindowSystem startWithFiles={data.startWithFile ? [data.startWithFile] : []}>
    <main><FileContainer {files} /></main>
</WindowSystem>

<style>
    main {
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
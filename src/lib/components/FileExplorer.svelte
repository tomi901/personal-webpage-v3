<script lang="ts">
	import FileContainer from "$components/FileContainer.svelte";
	import type { ExecutableFile } from "$lib/program/File";

	export let files: ExecutableFile[] = [];
</script>

<div class="container">
	<FileContainer {files} />
</div>

<style>
	.container {
		padding: 16px;
		color: black;
	}
</style>

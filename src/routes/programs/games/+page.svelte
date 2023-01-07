<script>
	import FileContainer from "$lib/components/FileContainer.svelte";
	import IFrameSystem from "$lib/components/IFrameSystem.svelte";
	import files from "$lib/program/files/games";
</script>

<IFrameSystem>
    <div class="container">
        <FileContainer {files} />
    </div>
</IFrameSystem>

<style>
    .container {
        padding: 16px;
    }
</style>

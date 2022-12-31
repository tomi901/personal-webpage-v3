<script lang="ts">
    import files, { createFileLookup } from "../program/files";
    import { setContextSystem } from "../program/system";
    import ProgramWindow from "./ProgramWindow.svelte";

    let windows: { title?: string, url: string }[] = [];

    function openWindow(url: string, title?: string) {
        windows.push({ title, url });
        windows = windows; // Forces update
    }

    const fileLookup = createFileLookup(...files);
    setContextSystem({
        getFileById(id) {
            return fileLookup[id];
        },
        openWindow,
    });
</script>

<slot />

{#each windows as w}
    <ProgramWindow title={w.title}>
        <iframe title={w.title} src={w.url} />
    </ProgramWindow>
{/each}

<style>
    iframe {
        width: calc(100% - 4px);
        background-color: white;
    }
</style>

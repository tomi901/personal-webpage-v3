<script lang="ts">
	import { ProgramWindow } from "$lib/program/ProgramWindow";
    import files, { createFileLookup } from "../program/files";
    import { setContextSystem } from "../program/system";
    import ProgramWindowView from "./ProgramWindowView.svelte";

    let windows: ProgramWindow[] = [];

    function openWindow(url: string, title?: string): ProgramWindow {
        const newWindow = new ProgramWindow(url, title);
        windows.push(newWindow);
        windows = windows; // Forces update
        return newWindow;
    }

    function closeWindow(win: ProgramWindow) {
        const index = windows.indexOf(win);
        windows.splice(index);
        windows = windows;
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

{#each windows as win}
    <ProgramWindowView title={win.title} on:close={() => closeWindow(win)}>
        <iframe title={win.title} src={win.url} />
    </ProgramWindowView>
{/each}

<style>
    iframe {
        width: calc(100% - 4px);
        background-color: white;
    }
</style>

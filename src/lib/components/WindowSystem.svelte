<script lang="ts">
	import { ProgramWindow, type ProgramWindowOptions } from "$lib/program/ProgramWindow";
    import { setContextSystem } from "../program/system";
    import ProgramWindowView from "./ProgramWindowView.svelte";

    let windows: ProgramWindow[] = [];

    function openWindow(url: string, windowOptions?: Partial<ProgramWindowOptions>, forceNew?: boolean): ProgramWindow {
        const win = getOrCreateWindow(url, forceNew);
        if (windowOptions) {
            win.title = windowOptions.title;
            windowOptions.x && (win.x = windowOptions.x);
            windowOptions.y && (win.y = windowOptions.y);
            windowOptions.height && (win.height = windowOptions.height);
            windowOptions.width && (win.width = windowOptions.width);
        }
        return win;
    }

    function getOrCreateWindow(url: string, forceNew?: boolean) {
        if (!forceNew) {
            for (const win of windows) {
                if (win.url === url) {
                    return win;
                }
            }
        }

        const newWindow = new ProgramWindow(url);
        windows.push(newWindow);
        windows = windows; // Forces update
        return newWindow;
    }

    function closeWindow(win: ProgramWindow) {
        const index = windows.indexOf(win);
        windows.splice(index);
        windows = windows;
    }

    setContextSystem({
        openWindow,
    });
</script>

<slot />

{#each windows as win}
    <ProgramWindowView
        title={win.title}
        bind:x={win.x}
        bind:y={win.y}
        bind:width={win.width}
        bind:height={win.height}
        on:close={() => closeWindow(win)}
        >
        <iframe title={win.title} src={win.url} />
    </ProgramWindowView>
{/each}

<style>
    iframe {
        width: 100%;
        height: calc(100% - 4px);
        border: none;
    }
</style>

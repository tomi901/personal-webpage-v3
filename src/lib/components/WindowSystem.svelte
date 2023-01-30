<script lang="ts">
	import { onMount, onDestroy } from "svelte";

    import ProgramWindowView from "./ProgramWindowView.svelte";
	import { ProgramWindow, type ProgramWindowOptions } from "$lib/program/ProgramWindow";
    
    import { setContextSystem, type Content, type OperativeSystem } from "$lib/program/system";
	import type { AnyMessage } from "$lib/types/messages";
    import type { ExecutableFile } from "$lib/program/File";
	import { getFile } from "$lib/program/files/all";
	import { goto } from "$app/navigation";

    export let listenToMessages = true;
    export let startWithFiles: (string | ExecutableFile)[] = [];

    let windows: ProgramWindow[] = [];
    const abort = new AbortController();

    export const system: OperativeSystem = {
        openWindow,
        goto: systemGoto,
    };
    setContextSystem(system);

    for (const file of startWithFiles) {
        const f = typeof file === "string" ? getFile(file) : file;
        if (f && f.onOpen && typeof f.onOpen !== "string") {
            f.onOpen(system);
        }
    }

    onMount(() => {
        if (listenToMessages) {
            window.addEventListener("message", (message: MessageEvent<AnyMessage>) => {
                switch (message.data.type) {
                    case "open-window":
                        const { url, options, forceNew } = message.data;
                        openWindow(url, options, forceNew);
                        break;
                    case "goto":
                        systemGoto(message.data.url);
                        break;
                }
            }, { signal: abort.signal });
        }
    });

    onDestroy(() => abort.abort());

    function systemGoto(url: string): Promise<void> {
        return goto(`/${url}`, { replaceState: true });
    }

    function openWindow(content: Content, windowOptions?: Partial<ProgramWindowOptions>, forceNew?: boolean) {
        const win = getOrCreateWindow(content, windowOptions?.programId, forceNew);
        if (!windowOptions) {
            return;
        }
        win.title = windowOptions.title;
        windowOptions.x && (win.x = windowOptions.x);
        windowOptions.y && (win.y = windowOptions.y);
        windowOptions.height && (win.height = windowOptions.height);
        windowOptions.width && (win.width = windowOptions.width);
        windowOptions.maximized && (win.maximized = windowOptions.maximized);
    }

    function getOrCreateWindow(content: Content, programId?: string, forceNew?: boolean): ProgramWindow {
        if (!forceNew) {
            for (const win of windows) {
                if (win.programId === programId) {
                    return win;
                }
            }
        }

        const newWindow = new ProgramWindow(content, programId);
        windows.push(newWindow);
        windows = windows; // Forces update
        return newWindow;
    }

    function closeWindow(win: ProgramWindow) {
        const index = windows.indexOf(win);
        windows.splice(index);
        windows = windows;
    }
</script>

<slot />

{#each windows as win}
    <ProgramWindowView
        title={win.title}
        bind:x={win.x}
        bind:y={win.y}
        bind:width={win.width}
        bind:height={win.height}
        bind:maximized={win.maximized}
        on:close={() => closeWindow(win)}
        >
        {#if typeof(win.content) === "string"}
            <iframe title={win.title} src={win.content} />
        {:else}
            <p>Svelte component content not supported yet</p>
        {/if}
    </ProgramWindowView>
{/each}

<style>
    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
</style>

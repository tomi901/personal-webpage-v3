<script lang="ts">
	import type { AnyMessage } from "$lib/messages";
	import { ProgramWindow, type ProgramWindowOptions } from "$lib/program/ProgramWindow";
	import { onMount, onDestroy } from "svelte";
    import { setContextSystem, type Content } from "../program/system";
    import ProgramWindowView from "./ProgramWindowView.svelte";

    export let listenToMessages = true;

    let windows: ProgramWindow[] = [];
    const abort = new AbortController();

    setContextSystem({
        openWindow,
    });

    onMount(() => {
        if (listenToMessages) {
            window.addEventListener('message', (message: MessageEvent<AnyMessage>) => {
                if (message.isTrusted && message.data.type == 'open-window') {
                    const { url, options, forceNew } = message.data;
                    openWindow(url, options, forceNew);
                }
            }, { signal: abort.signal });
        }
    });

    onDestroy(() => abort.abort());

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

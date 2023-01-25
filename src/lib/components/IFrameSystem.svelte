<script lang="ts">
	import type { GotoMessage, OpenWindowMessage } from "$lib/types/messages";
	import { setContextSystem } from "$lib/program/system";

    setContextSystem({
        openWindow(content, options, forceNew) {
            window.parent.postMessage(<OpenWindowMessage>{
                type: "open-window",
                url: content,
                options,
                forceNew,
            });
        },
        goto(url) {
            window.parent.postMessage(<GotoMessage>{
                type: "goto",
                url,
            });
            return Promise.resolve();
        },
    });
</script>

<slot />

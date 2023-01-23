<script lang="ts">
	import type { OpenWindowMessage } from "$lib/types/messages";
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
    });
</script>

<slot />

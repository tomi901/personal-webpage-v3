<script lang="ts">
	import type { OpenWindowMessage } from "$lib/messages";
	import { setContextSystem } from "$lib/program/system";

    setContextSystem({
        openWindow(url, options, forceNew) {
            window.parent.postMessage(<OpenWindowMessage>{
                type: "open-window",
                url,
                options,
                forceNew,
            });
        },
    });
</script>

<slot />

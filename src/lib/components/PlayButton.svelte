<script lang="ts">
	import { getFile } from "$lib/program/files/all";
	import { getContextSystem } from "$lib/program/system";
    export let id: string;

    const system = getContextSystem();

    function onClick() {
        const file = getFile(`games/${id}`);
        if (!file) {
            throw new Error(`Game with id "${id}" not found.`);
        }
        file.onOpen(system);
    }
</script>

<a href={`/games/${id}`} on:click={onClick}>
    Play
</a>

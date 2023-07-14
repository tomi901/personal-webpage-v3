<script lang="ts">
	import { incrementVisit } from "$lib/services/visits";
	import { onMount } from "svelte";

    export let visitId: string;

    let visits: Promise<number>;
    onMount(() => {
        visits = incrementVisit(visitId);
    });
</script>

{#await visits}
    <p>Loading visits...</p>
{:then amount}
    <p>{amount} visit(s)</p>
{:catch error}
    <p>Cannot load visits ({error})</p>
{/await}

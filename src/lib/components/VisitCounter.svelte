<script lang="ts">
	import { onMount } from "svelte";

    export let visitId: string;

    let visits: Promise<number> = new Promise(() => {});
    onMount(() => {
        visits = incrementVisit();
    });

    async function incrementVisit() {
        const response = await fetch(`/api/visits/${visitId}`, { method: "PUT" })
            .then(r => r.json());
        return Number(response);
    }
</script>

{#await visits}
    <p>Visits: (Loading...)</p>
{:then amount}
    <p>Visits: {amount}</p>
{:catch error}
    <p>Visits: [ERROR]</p>
{/await}

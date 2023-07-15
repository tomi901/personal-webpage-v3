<script lang="ts">
	import { onMount } from "svelte";

    export let visitId: string;

    const LEADING_ZEROES = "0000000";
    let counter = "-------";

    onMount(async () => {
        const data: number = await fetch(`/api/visits/${visitId}`, { method: "PUT" })
            .then(throwOnErrorStatus)
            .then(r => r.json())
            .catch(e => {
                console.error(e);
                return "[ERROR]"
            });

        counter = LEADING_ZEROES + data;
        counter = counter.substring(counter.length - LEADING_ZEROES.length);
    });

    function throwOnErrorStatus(response: Response): Response {
        if (response.status >= 400) {
            throw response;
        }
        return response;
    }
</script>

<div>
    <span class="title">Visits: </span>
    {#each counter as c }
        <span class="count">{c}</span>
    {/each}
</div>

<style>
    @font-face {
        font-family: "Fire";
        src: url("$lib/assets/fonts/firestarter.ttf");
        font-display: swap;
    }

    div {
        font-size: 1.5rem;
        font-family: "Fire", monospace;
        margin: 20px 0;
    }

    .title {
        background: -webkit-linear-gradient(yellow, orange);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .count {
        color: black;
        background-color: #eeeeee;
        border: solid 1px gray;
        text-shadow: gray 1px 1px;

        padding: 1px;
        margin: 0 2px;
    }
</style>

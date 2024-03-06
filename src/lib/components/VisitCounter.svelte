<script lang="ts">
	import { getFirebaseContext } from "sveltefire";
	import { getAndIncrementVisit } from "$lib/stores/visits";

	export let visitId: string;

	const rtdb = getFirebaseContext().rtdb;
	if (!rtdb) {
		throw new Error("Realtime Database not found");
	}
	const LEADING_ZEROES = "0000000";
	const COUNTER_DEFAULT = "-------";
	let counter = COUNTER_DEFAULT;

	const visits = getAndIncrementVisit(rtdb, visitId);

	$: {
		const visitsString = $visits?.toString();
		counter = visitsString
			? (LEADING_ZEROES + visitsString).slice(-Math.max(LEADING_ZEROES.length, visitsString.length))
			: COUNTER_DEFAULT;
	}
</script>

<div>
	<span class="title">Visits: </span>
	{#each counter as c}
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

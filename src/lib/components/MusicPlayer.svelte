<script lang="ts">
	import { onDestroy, onMount } from "svelte";

	export let src: string;
	export let volume = 0.3;

	let isPlaying: boolean | undefined = undefined;

	let audio: HTMLAudioElement | undefined;
	onMount(() => {
		audio = new Audio(src);
		audio.volume = volume;
		// play();
	});

	onDestroy(() => {
		if (!audio) {
			return;
		}
		audio.pause();
		audio = undefined;
	});

	function updateIsPlaying() {
		isPlaying = audio && !audio.paused;
	}

	async function play() {
		if (audio && audio.paused) {
			await audio.play();
			updateIsPlaying();
		}
	}

	async function togglePlay() {
		if (audio && audio.paused) {
			await audio.play();
		} else if (audio && !audio.paused) {
			audio.pause();
		}
		updateIsPlaying();
	}
</script>

<div class="container">
	<button class="play-btn" on:click={togglePlay}>
		{#if isPlaying}
			<img height="64px" width="64px" alt="Playing music button" src="/UI/playing-btn.gif" />
		{:else}
			<img height="64px" width="64px" alt="Play music button" src="/UI/not-playing-btn.png" />
		{/if}
	</button>
	<div class="player-text-container">
		<span>
			{#if isPlaying}
				Green Day - BasketCase.midi
			{:else}
				Play
			{/if}
		</span>
	</div>
</div>

<style>
	.container {
		image-rendering: crisp-edges;

		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 1000;

		margin: 8px;
		display: flex;
		flex-direction: row;
		align-content: stretch;
	}

	.play-btn {
		background: none;
		padding: none;
		border: none;
	}

	.play-btn:hover {
		filter: brightness(1.1);
	}

	.player-text-container {
		height: 64px;
		width: 256px;

		border: 16px solid transparent;
		border-image: url("/UI/play-container.png") 8 stretch;
		box-sizing: border-box;
		background-color: #252525;

		display: flex;
		flex-direction: row;
		align-items: center;

		padding: 0 10px;
	}

	.player-text-container span {
		font-size: 1rem;
	}
</style>

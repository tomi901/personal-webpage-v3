<article class="default">
	<slot />
</article>

<style>
	article {
		padding: 40px 80px;
		text-align: justify;
		max-width: 800px;
		margin: auto;
	}

	article :global(h3) {
		margin-top: 48px;
	}

	article :global(h4) {
		margin-top: 48px;
	}

	article :global(a) {
		color: #888888;
		text-decoration: underline dotted;
	}

	article :global(a:hover) {
		color: #aaaaaa;
	}

	article :global(.yt-center) {
		margin-top: 24px;
		display: flex;
		justify-content: center;
	}

	article :global(.links) {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>

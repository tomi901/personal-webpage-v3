<script>
	import PlayButton from "$components/PlayButton.svelte";
	import Image from "$lib/components/Image.svelte";
	import PageArticle from "$components/PageArticle.svelte";
</script>

<PageArticle>
	<h4>Urban explorers</h4>

	<p>
		This is a game that started in 2019 which consisted of exploring abandoned places to get loot.
		Altough we find some residents on these places who are not exactly people, so be prepared.
	</p>

	<p>
		This is a 2D game that uses 2D illumination as a mechanic. The game ended up having some nice
		graphics on it.
	</p>

	<div class="links">
		<PlayButton id="urban_explorers.exe" />
		<a href="https://parenthesix.itch.io/urban-explorers" target="_blank" rel="noreferrer"
			>Itch.io page</a
		>
	</div>

	<div class="yt-center">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/dAmYwOt8vEY?si=1RV2od_tSX0Sss0x"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		>
		</iframe>
	</div>

	<Image
		footer="Urban explorers, a 2D urban exploration I made with an indie company"
		images={[{ src: "/Games/Screenshots/urban_explorers_1.jpg", alt: "Urban explorers screenshot" }]}
	/>
</PageArticle>

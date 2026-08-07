<script>
	import PlayButton from "$components/PlayButton.svelte";
	import Image from "$lib/components/Image.svelte";
	import PageArticle from "$components/PageArticle.svelte";
</script>

<PageArticle>
	<h4>Rat Dystopia</h4>

	<p>
		This is a game where I had a lead role, it's a game inspired on <a
			href="https://discoelysium.com/"
			target="_blank"
			rel="noreferrer"
		>
			Disco Elysium</a
		>. An RPG where you use your abilities to overcome any obstacles you find, using either
		intellectual, emotional or physical skills.
	</p>

	<p>
		There's no combat exactly, but rather, stuff will happen and you will use your abilities in
		response. Maybe convincing someone to sell you something for cheap using <strong
			>Diplomacy</strong
		>, repairing a faulty cable connection using <strong>Mechanics</strong> or dodge a punch using
		<strong>Primal Instinct</strong>.
	</p>

	<div class="links">
		<PlayButton id="rat-dystopia.exe" />
		<a href="https://tomi-rinaldi.itch.io/rat-dystopia" target="_blank" rel="noreferrer"
			>Itch.io page</a
		>
	</div>

	<div class="yt-center">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/lW0iksiDtgc?si=G42p0wGzonmxnL1R"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		>
		</iframe>
	</div>

	<Image
		footer="UI with dialogues and a Knowledge dice throw"
		images={[{ src: "/Games/Screenshots/rd1.png", alt: "Rat dystopia screenshot with UI" }]}
	/>

	<Image
		footer="Early concept for graphics"
		images={[{ src: "/Games/Screenshots/rd2.png", alt: "Rat dystopia concept" }]}
	/>
</PageArticle>

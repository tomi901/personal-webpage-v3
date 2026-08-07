<script>
	import Image from "$lib/components/Image.svelte";
	import PageArticle from "$components/PageArticle.svelte";
</script>

<PageArticle>
	<h4>Zone 1-70</h4>

	<p>
		One of my best projects I had. A colony sim heavily inspired in classical RTS games
		like Warcraft III, Starcraft, C&C and AoE where you explore and build bases in liminal
		spaces.
	</p>

	<div class="yt-center">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/5ysB7z5UR7w?si=5HcVq22T-X4swOJn"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		>
		</iframe>
	</div>

	<p>
		Send an expedition of scientists, investigate the zone, find anomalies and do experiments
		to determine the anomaly. Discover its properties and unlock technology with the newly found
		D.A.T.A.
	</p>

	<p>
		Be careful, because t̷͙̆̉h̵͉͌͝ë̵̼͎͖́̊̕y̵̰̳͐ live inside the Zone, you will need more than machine guns to be
		able to defend your base against them.
	</p>

	<p>
		I worked as a designer, 3D modeler and the main programmer with many features like:
	</p>

	<ul>
		<li>Unit components to make units and buildings modular and extensible</li>
		<li>Map mesh generator</li>
		<li>Fog-of-war rendering using C# jobs to multithread</li>
		<li>Minimap using custom shaders</li>
		<li>Tech tree with special conditions to progress</li>
		<li>Many other visual effects and filters to give it its retro style</li>
	</ul>

	<Image
		footer="The G.A.T.E, the entrance to the Zone"
		images={[{ src: "/Games/Screenshots/z170_1.png", alt: "A scientist that just entered the Zone" }]}
	/>

	<Image
		footer="The tech tree, it's not just a use-points-to-unlock thing, you also need to do actual field research"
		images={[{ src: "/Games/Screenshots/z170_2.png", alt: "A tech tree with two technologies discovered" }]}
	/>

	<Image
		footer="Entities live in the Zone, use your military to handle it"
		images={[{ src: "/Games/Screenshots/z170_3.png", alt: "A soldier destroying a flesh wall" }]}
	/>
</PageArticle>

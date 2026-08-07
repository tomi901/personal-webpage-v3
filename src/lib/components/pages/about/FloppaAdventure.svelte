<script>
	import PlayButton from "$components/PlayButton.svelte";
	import Image from "$lib/components/Image.svelte";
	import PageArticle from "$components/PageArticle.svelte";
</script>

<PageArticle>
	<h4>Floppa Adventure</h4>

	<p>
		This is a game that I made as to demonstrate how can I handle shaders and platforming controls
		in 3D Unity. It includes cinematics made using Timeline with dialogue boxes. It also includes a
		moveset like double jump and wall jumping.
	</p>

	<p>
		The game includes retro aesthetics imitating PS1 and N64 graphics, using the Render Pipeline and
		different filter layers. Giving the appeareance of a game that was released in the late 90s.
	</p>

	<PlayButton id="floppa_adventure.exe" />

	<Image
		footer="Retro graphics 3D platformer I made as a demo"
		images={[
			{
				src: "/Games/Screenshots/floppa_game_1.jpg",
				alt: "Retro graphics 3D platformer screenshot"
			}
		]}
	/>
</PageArticle>

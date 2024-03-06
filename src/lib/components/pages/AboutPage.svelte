<script>
	import PlayButton from "$components/PlayButton.svelte";
	import Image from "$lib/components/Image.svelte";
	import { SOURCE_CODE } from "$lib/constants";
</script>

<article class="default">
	<h1>About me</h1>

	<p>
		My name is Tomás (Or Tom) Rinaldi and I'm a web and videogame developer. I like creating
		videogames as a hobby and I aspire to become an indie developer.
	</p>

	<Image
		footer="The avatar I mostly use"
		height="128px"
		images={[{ src: "/profile_picture.jpg", alt: "My avatar" }]}
	/>

	<h3>Game development</h3>

	<p>
		With games, I program with <b>C#</b> with Unity or <b>C++</b> with Unreal Engine or Frostbite. I've
		been working with Unity for 10 years, including hobby years, so I would say I'm pretty familiar with
		it.
	</p>

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
		images={[
			{ src: "/Games/Screenshots/urban_explorers_1.jpg", alt: "Urban explorers screenshot" }
		]}
	/>

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

	<h3>Web development</h3>

	<Image
		height="128px"
		images={[
			{ src: "/Logos/react.png", alt: "React logo" },
			{ src: "/Logos/svelte.png", alt: "Svelte logo" }
		]}
	/>

	<p>
		For web development I used Angular and React, but for me Svelte is my cup of tea. In fact, this
		page was made with SvelteKit, if you want to see the source code for this page you can click
		<a href={SOURCE_CODE} target="_blank" rel="noreferrer">here</a>.
	</p>

	<h3>Rust</h3>

	<Image
		height="128px"
		images={[
			{ src: "/Logos/rust.svg", alt: "Rust logo" },
			{ src: "/Logos/tauri.svg", alt: "Tauri logo" }
		]}
	/>

	<p>
		For lower level languagues I'm more of a fan of <strong>Rust</strong> over <strong>C++</strong>
		or <strong>C</strong>, I really like many of the approaches it takes with error and optional
		values handling. It also really gives a high-level programming to a low-level language with
		syntactic sugar like pattern matching and many useful macros (Which you can create as well!).
	</p>

	<p>I Really hope to see Rust in the industry and job applications in the near future!</p>

	<p>
		For desktop apps (And possibly mobile apps in a future) I use <strong>Tauri</strong>, which
		combines a web frontend with a <strong>Rust</strong> backend, and of course, I use a
		<strong>Svelte</strong> frontend with it.
	</p>

	<h3>Advent of Code 2023</h3>

	<p>
		That same year I decided to start <a
			href="https://adventofcode.com/2023"
			target="_blank"
			rel="noreferrer"
		>
			Advent of Code 2023</a
		>
		challenges, each day from December 1st to 25th with a different problem to solve using programming.
		I decided to use <strong>Rust</strong>,
		<small>and it was kinda though using a language that I wasn't that used to program with</small>.
	</p>

	<Image height="512px" images={[{ src: "/Logos/adventofcode.jpg", alt: "Advent of Code" }]} />

	<p>
		However I was able to solve all 25 days, <small
			>though I also needed some help for days 12 and 24</small
		>.
	</p>

	<a href="https://github.com/tomi901/advent-of-code-2023" target="_blank" rel="noreferrer"
		>Link to repo</a
	>
</article>

<style>
	article {
		padding: 40px 80px;
		text-align: justify;
		max-width: 800px;
		margin: auto;
	}

	h3 {
		margin-top: 48px;
	}

	h4 {
		margin-top: 48px;
	}

	a {
		color: #888888;
		text-decoration: underline dotted;
	}

	a:hover {
		color: #aaaaaa;
	}

	.yt-center {
		margin-top: 24px;
		display: flex;
		justify-content: center;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>

<script>
	import Image from "$lib/components/Image.svelte";
	import PageArticle from "$components/PageArticle.svelte";
	import { SOURCE_CODE } from "$lib/constants";
	import { getContextSystem } from "$lib/program/system";
	import aboutFiles from "$lib/program/files/about";

	const system = getContextSystem();

	function openSection(file) {
		file.onOpen?.(system);
		system.goto(file.id);
	}
</script>

<PageArticle>
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

	<ul class="game-nav">
		{#each aboutFiles as file}
			<li>
				<button type="button" on:click={() => openSection(file)}>{file.name}</button>
			</li>
		{/each}
	</ul>

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
</PageArticle>

<style>
	.game-nav {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.game-nav button {
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;

		color: #888888;
		text-decoration: underline dotted;
	}

	.game-nav button:hover {
		color: #aaaaaa;
	}
</style>

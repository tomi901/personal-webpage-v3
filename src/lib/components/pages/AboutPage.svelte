<script>
	import Image from "$lib/components/Image.svelte";
	import { SOURCE_CODE } from "$lib/constants";
</script>

<article class="default">
    <h1>About me</h1>

    <p>
        My name is Tomás (Or Tom) Rinaldi and I'm a web and videogame developer. I like creating videogames
        as a hobby and I aspire to become an indie developer.
    </p>

    <Image footer="The avatar I mostly use" height="128px" images={[
        { src: "/profile_picture.jpg", alt: "My avatar" },
    ]} />

    <h3>Programming</h3>

    <h4>Games</h4>

    <p>
        With games, I program with <b>C#</b> with Unity or <b>C++</b> with Unreal Engine or Frostbite. I've
        been working with Unity for 10 years, including hobby years, so I would say I'm pretty familiar with it.
    </p>

    <Image footer="Retro graphics 3D platformer I made as a demo" images={[
        { src: "/Games/Screenshots/floppa_game_1.jpg", alt: "Retro graphics 3D platformer screenshot" },
    ]} />
    <Image footer="Urban explorers, a 2D urban exploration I made with an indie company" images={[
        { src: "/Games/Screenshots/urban_explorers_1.jpg", alt: "Urban explorers screenshot" },
    ]} />

    <h4>Web development</h4>

    <Image height="128px" images={[
        { src: "/Logos/react.png", alt: "React logo" },
        { src: "/Logos/svelte.png", alt: "Svelte logo" },
    ]} />

    <p>
        For web
        development I used Angular and React, but for me Svelte is my cup of tea. In fact, this page was made with
        SvelteKit, if you want to see the source code for this page you can click
        <a href={SOURCE_CODE} target="_blank" rel="noreferrer">here</a>.
    </p>

    <h4>Rust</h4>

    <Image height="128px" images={[
        { src: "/Logos/rust.svg", alt: "Rust logo" },
        { src: "/Logos/tauri.svg", alt: "Tauri logo" },
    ]} />

    <p>
        For lower level languagues I'm more of a fan of <b>Rust</b> over <b>C++</b> or <b>C</b>, I really like many of the approachs it
        takes with error and null values handling. For desktop apps (And possibly mobile apps in a future) I use <b>Tauri</b>, which combines
        a web frontend with a <b>Rust</b> backend, and of course, I use a <b>Svelte</b> frontend with it.
    </p>
</article>

<style>
    article {
        padding: 40px 80px;
        text-align: justify;
        max-width: 800px;
        margin: auto;
    }
</style>

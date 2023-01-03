<script>
	import Image from "$lib/components/Image.svelte";
</script>

<article>
    <h1>About me</h1>

    <p>
        My name is Tomás (Or Tom) Rinaldi and I'm a web and videogame developer. I like creating videogames
        as a hobby and I aspire to become an indie developer.
    </p>

    <Image _class="image" footer="The avatar I mostly use" maxHeight="128px">
        <img src="/profile_picture.jpg" alt="My avatar" />
    </Image>

    <h3>Programming</h3>

    <h4>Games</h4>

    <p>
        With games, I program with <b>C#</b> with Unity or <b>C++</b> with Unreal Engine or Frostbite. I've
        been working with Unity for 10 years, including hobby years, so I would say I'm pretty familiar with it.
    </p>

    <Image _class="image" footer="Retro graphics 3D platformer I made as a demo">
        <img src="/Games/Screenshots/floppa_game_1.jpg" alt="Retro graphics 3D platformer screenshot" />
    </Image>
    <Image _class="image" footer="Urban explorers, a 2D urban exploration I made with an indie company">
        <img src="/Games/Screenshots/urban_explorers_1.jpg" alt="Urban explorers screenshot" />
    </Image>

    <h4>Web development</h4>

    <Image _class="image" maxHeight="128px">
        <img src="/Logos/react.png" alt="React logo" />
        <img src="/Logos/svelte.png" alt="Svelte logo" />
    </Image>

    <p>
        For web
        development I used Angular and React, but for me Svelte is my cup of tea. In fact, this page was made with
        SvelteKit, if you want to see the source code for this page you can click
        <a href="https://github.com/tomi901/personal-webpage-v2/" target="_blank" rel="noreferrer">here</a>.
    </p>

    <h4>Rust</h4>

    <Image _class="image" maxHeight="128px">
        <img src="/Logos/rust.svg" alt="Rust logo" />
        <img src="/Logos/tauri.svg" alt="Tauri logo" />
    </Image>

    <p>
        For lower level languagues I'm more of a fan of <b>Rust</b> over <b>C++</b> or <b>C</b>, I really like many of the approachs it
        takes with error and null values handling. For desktop apps (And possibly mobile apps in a future) I use <b>Tauri</b>, which combines
        a web frontend with a <b>Rust</b> backend, and of course, I use a <b>Svelte</b> frontend with it.
    </p>
</article>

<style>
    article {
        padding: 20px 40px;
        text-align: justify;
    }

    :global(.image) {
        max-width: 100%;
        margin: 0px auto;
        padding: 15px 5px;
    }
</style>

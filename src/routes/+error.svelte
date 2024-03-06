<script>
	import { page } from "$app/stores";
	import { SOURCE_CODE } from "$lib/constants";
</script>

<main>
	<h1>Error {$page.status} ({$page.error?.message})</h1>
	<pre>
                       )/_
             _.--..---"-,--X_
        \L..'           ._X__)_
,-.     _.+  _  \..--( /
  `\.-''__.-' \ (     \_      
    `'''       `\__   /\
                ')
    </pre>
	<p>There was an error while trying to load the page:</p>
	<p>{$page.url.pathname}</p>
	<p>---------------------------------------------------------</p>
	<p>
		If the error persists send an issue to my <a href={SOURCE_CODE}>Github Project</a>
		or go back to the <a href="/">Home Page</a>.
	</p>
	<p class="credit">(Ascii art by Andreas Freise)</p>
</main>

<style>
	:root {
		--bsod-color: #0827f5;
	}

	main {
		background-color: var(--bsod-color);
		color: white;
		height: 100vh;
		width: 100vw;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-size: 1rem;
		background-color: white;
		color: var(--bsod-color);
		padding: 2px 5px;
		margin: 0 16px;
	}

	pre {
		font-family: inherit;
	}

	p {
		text-align: center;
		margin: 8px 16px;
		max-width: 500px;
	}

	a {
		color: white;
	}

	.credit {
		opacity: 0.5;
	}

	:global(body) {
		margin: 0;
	}
</style>

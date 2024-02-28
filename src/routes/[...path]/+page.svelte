<script lang="ts">
	import FileContainer from '$lib/components/FileContainer.svelte';
	import WindowSystem from '$lib/components/WindowSystem.svelte';
	import files from '$lib/program/files/desktop';

	import { FirebaseApp } from 'sveltefire';
	import { initializeApp } from 'firebase/app';
	import { getDatabase } from 'firebase/database';

	import {
		PUBLIC_FIREBASE_API_KEY,
		PUBLIC_FIREBASE_APP_ID,
		PUBLIC_FIREBASE_DATABASE_URL,
		PUBLIC_FIREBASE_PROJECT_ID,
	} from '$env/static/public';

	const app = initializeApp({
		apiKey: PUBLIC_FIREBASE_API_KEY,
		appId: PUBLIC_FIREBASE_APP_ID,
		databaseURL: PUBLIC_FIREBASE_DATABASE_URL,
		projectId: PUBLIC_FIREBASE_PROJECT_ID,
	});
	const db = getDatabase(app);

	export let data;
</script>

<svelte:head>
	<title>Tomás Rinaldi's webpage</title>
</svelte:head>

<FirebaseApp rtdb={db}>
	<WindowSystem startWithFiles={data.startWithFile ? [data.startWithFile] : []}>
		<main><FileContainer {files} /></main>
	</WindowSystem>
</FirebaseApp>

<style>
	main {
		padding: 32px;
	}
	:global(html) {
		background-color: hsl(164, 86%, 16%);
		color: rgb(254 243 199);
	}
	:global(body) {
		margin: 0;
	}
	:global(code) {
		font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
			Bitstream Vera Sans Mono, Courier New, monospace;
	}
</style>

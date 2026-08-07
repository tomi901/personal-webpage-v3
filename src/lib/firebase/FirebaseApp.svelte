<script lang="ts">
	import type { Database } from "firebase/database";
	import { setFirebaseContext } from "./context";

	export let rtdb: Database | undefined = undefined;

	setFirebaseContext({ rtdb });
</script>

<slot />

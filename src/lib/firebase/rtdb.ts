import { writable } from "svelte/store";
import { onValue, ref as dbRef, type Database } from "firebase/database";

export function nodeStore<T = unknown>(rtdb: Database, path: string, startWith?: T) {
	const dataRef = dbRef(rtdb, path);
	const { subscribe } = writable<T | undefined>(startWith, (set) => {
		return onValue(dataRef, (snapshot) => {
			set(snapshot.val());
		});
	});

	return {
		subscribe,
		ref: dataRef
	};
}

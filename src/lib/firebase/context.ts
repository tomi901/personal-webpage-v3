import { getContext, setContext } from "svelte";
import type { Database } from "firebase/database";

const contextKey = "firebase";

export interface FirebaseSDKContext {
	rtdb?: Database;
}

export function setFirebaseContext(sdks: FirebaseSDKContext) {
	setContext(contextKey, sdks);
}

export function getFirebaseContext(): FirebaseSDKContext {
	return getContext(contextKey);
}

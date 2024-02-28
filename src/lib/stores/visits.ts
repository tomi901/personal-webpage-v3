import { set, increment, type Database } from "firebase/database";
import { nodeStore } from 'sveltefire';
import { browser } from "$app/environment";

export function getAndIncrementVisit(db: Database, id: string) {
    const node = nodeStore<number>(db, `/visits/${id}`, undefined);
    if (!browser) {
        set(node.ref, increment(1)).catch(console.error);
    }
    return node;
}

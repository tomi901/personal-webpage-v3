import type { ExecutableFile } from "../File";
import desktop from "./desktop";
import games from "./games";

const allLookup = new Map(getAllKeyValues());

function getAllKeyValues(): [string, ExecutableFile][] {
	return [...desktop, ...games].map((f) => [f.id, f]);
}

export function fileWithIdExists(id: string): boolean {
	return allLookup.has(id);
}

export function getFile(id: string): ExecutableFile | undefined {
	return allLookup.get(id);
}

import type { ExecutableFile } from "../File";
import desktop from "./desktop";
import games from "./games";

const allLookup = new Map(getAllKeyValues());

function getAllKeyValues(): [string, ExecutableFile][] {
    return [
        ...desktop,
        ...games,
    ].map(f => [f.id, f]);
}

export function fileWithIdExists(id: string) {
    return allLookup.has(id);
}

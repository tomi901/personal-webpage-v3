import { getContext, setContext } from "svelte";
import type { ExecutableFile } from "./File";

const key = Symbol();

export interface OperativeSystem {
    getFileById: (id: string) => ExecutableFile;
    openWindow: (url: string) => void;
}

export function setContextSystem(system: OperativeSystem) {
    return setContext(key, system);
}

export function getContextSystem() {
    return getContext<OperativeSystem>(key);
}

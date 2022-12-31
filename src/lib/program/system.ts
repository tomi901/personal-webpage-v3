import { getContext, setContext } from "svelte";
import type { ExecutableFile } from "./File";
import type { ProgramWindow } from "./ProgramWindow";

const key = Symbol();

export interface OperativeSystem {
    getFileById: (id: string) => ExecutableFile;
    openWindow: (url: string, title?: string) => ProgramWindow;
}

export function setContextSystem(system: OperativeSystem) {
    return setContext(key, system);
}

export function getContextSystem() {
    return getContext<OperativeSystem>(key);
}

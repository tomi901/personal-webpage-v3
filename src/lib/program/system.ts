import { getContext, setContext } from "svelte";
import type { ProgramWindow, ProgramWindowOptions } from "./ProgramWindow";

const key = Symbol();

export interface OperativeSystem {
    openWindow: (url: string, windowOptions?: Partial<ProgramWindowOptions>, forceNew?: boolean) => ProgramWindow;
}

export function setContextSystem(system: OperativeSystem) {
    return setContext(key, system);
}

export function getContextSystem() {
    return getContext<OperativeSystem>(key);
}

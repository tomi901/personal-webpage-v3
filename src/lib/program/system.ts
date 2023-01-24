import { getContext, setContext } from "svelte";
import type { ProgramWindowOptions } from "./ProgramWindow";
import type { SvelteComponentTyped } from "svelte";

const key = Symbol();

export type URLString = string;
export type Content = URLString | SvelteComponentTyped;

export interface OperativeSystem {
    openWindow: (content: Content, windowOptions?: Partial<ProgramWindowOptions>, forceNew?: boolean) => void;
}

export function getContextKeyValue(system: OperativeSystem): [symbol, OperativeSystem] {
    return [key, system];
}

export function setContextSystem(system: OperativeSystem) {
    return setContext(key, system);
}

export function getContextSystem() {
    return getContext<OperativeSystem>(key);
}

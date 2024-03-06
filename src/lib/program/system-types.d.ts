import type { SvelteComponent, SvelteComponentTyped } from "svelte";
import type { ProgramWindowOptions } from "./ProgramWindow";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyProps = Record<string, any>;

export type URLString = string;
export type Content = URLString | typeof SvelteComponent | ComponentTypeWithProps<AnyProps>;

export interface ComponentTypeWithProps<Props extends AnyProps> {
	component: typeof SvelteComponentTyped<Props>;
	props: Props;
}

export interface OperativeSystem {
	openWindow: (
		content: Content,
		windowOptions?: Partial<ProgramWindowOptions>,
		forceNew?: boolean
	) => void;
	goto: (url: URLString) => Promise<void>;
}

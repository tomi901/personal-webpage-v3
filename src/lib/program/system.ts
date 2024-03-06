import { getContext, setContext, type SvelteComponentTyped } from "svelte";
import type { AnyProps, ComponentTypeWithProps, OperativeSystem } from "./system-types";

const key = Symbol();

export function getContextKeyValue(system: OperativeSystem): [symbol, OperativeSystem] {
	return [key, system];
}

export function setContextSystem(system: OperativeSystem) {
	return setContext(key, system);
}

export function getContextSystem() {
	return getContext<OperativeSystem>(key);
}

export function componentWithProps<Props extends AnyProps>(
	component: typeof SvelteComponentTyped<Props>,
	props: Props
): ComponentTypeWithProps<Props> {
	return {
		component,
		props
	};
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import * as base from "@testing-library/svelte";

declare module "@testing-library/svelte" {
    type SvelteComponentOptions<C extends SvelteComponent> = ComponentProps<C> | {
        props: ComponentProps<C>
        context?: Map
    }

    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type Constructor<T> = new (...args: any[]) => T;

    /**
     * Render a Component into the Document.
     */
    export type RenderResult<C extends SvelteComponent, Q extends Queries = typeof queries> = {
        container: HTMLElement
        component: C
        debug: (el?: HTMLElement | DocumentFragment) => void
        rerender: (options: SvelteComponentOptions<C>) => void
        unmount: () => void
    } & { [P in keyof Q]: BoundFunction<Q[P]> }

    export interface RenderOptions<Q extends Queries = typeof queries> {
        container?: HTMLElement
        queries?: Q
    }

    export function render<C extends SvelteComponent>(
        component: Constructor<C>,
        componentOptions?: SvelteComponentOptions<C>,
        renderOptions?: Omit<RenderOptions, 'queries'>
    ): RenderResult<C>

    export function render<C extends SvelteComponent, Q extends Queries>(
        component: Constructor<C>,
        componentOptions?: SvelteComponentOptions<C>,
        renderOptions?: RenderOptions<Q>,
    ): RenderResult<C, Q>
}

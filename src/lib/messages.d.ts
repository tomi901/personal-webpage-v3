import type { ProgramWindowOptions } from "./program/ProgramWindow";

export type AnyMessage =
    OpenWindowMessage;

export interface MessageBase<Type extends string = string> {
    type: Type;
}

export interface OpenWindowMessage extends MessageBase<'open-window'> {
    url: string;
    options: Partial<ProgramWindowOptions>;
    forceNew?: boolean;
}

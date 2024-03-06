import type { URLString } from "$lib/program/system";
import type { ProgramWindowOptions } from "../program/ProgramWindow";

export type AnyMessage = OpenWindowMessage | GotoMessage;

export interface MessageBase<Type extends string = string> {
	type: Type;
}

export interface OpenWindowMessage extends MessageBase<"open-window"> {
	url: string;
	options: Partial<ProgramWindowOptions>;
	forceNew?: boolean;
}

export interface GotoMessage extends MessageBase<"goto"> {
	url: URLString;
}

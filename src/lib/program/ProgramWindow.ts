import type { Content } from "./system";

export interface ProgramWindowOptions {
    programId?: string;
    title?: string;

    x: number;
    y: number;
    width: number;
    height: number;

    maximized?: boolean;
}

export class ProgramWindow implements ProgramWindowOptions {
    public programId?: string;
    public content: Content;
    public title?: string;

    public x = 100;
    public y = 100;
    public width = 300;
    public height = 200;

    public maximized?: boolean;

    public constructor(content: Content, programId?: string) {
        this.programId = programId;
        this.content = content;
    }
}

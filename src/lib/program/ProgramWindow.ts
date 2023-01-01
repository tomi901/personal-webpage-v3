
export interface ProgramWindowOptions {
    title?: string;

    x: number;
    y: number;
    width: number;
    height: number;
}

export class ProgramWindow implements ProgramWindowOptions {
    public url: string;
    public title?: string;

    public x = 100;
    public y = 100;
    public width = 300;
    public height = 200;

    public constructor(url: string, title?: string) {
        this.url = url;
        this.title = title;
    }
}

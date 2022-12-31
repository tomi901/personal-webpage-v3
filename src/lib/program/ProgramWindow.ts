
export class ProgramWindow {
    public url: string;
    public title?: string;

    public constructor(url: string, title?: string) {
        this.url = url;
        this.title = title;
    }
}

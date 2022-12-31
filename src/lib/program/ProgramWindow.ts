
export class ProgramWindow {
    public url: string;
    public title?: string;
    
    private _isClosed: boolean = false;
    public get isClosed() { return this._isClosed; }

    public constructor(url: string, title?: string) {
        this.url = url;
        this.title = title;
    }
}

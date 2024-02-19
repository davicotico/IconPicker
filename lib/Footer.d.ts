export declare class Footer {
    protected container: HTMLDivElement;
    protected template: string;
    constructor(template: string);
    update(index: number, sizeGroup: number, sizeResult: number, total: number): void;
    private interpolate;
    getElement(): HTMLDivElement;
}

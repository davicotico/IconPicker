export declare class InputSearch {
    protected container: HTMLDivElement;
    protected input: HTMLInputElement;
    constructor(inputClass: string, placeholder: string);
    getInput(): HTMLInputElement;
    mount(): void;
    getElement(): HTMLDivElement;
}

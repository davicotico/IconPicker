import { NavButtons } from "./types";
export declare class NavBar {
    protected container: HTMLDivElement;
    private label;
    protected navButtons: NavButtons;
    constructor(navButtonClass: string, arrowPrevIconClass: string, arrowNextIconClass: string);
    setupNavLabel(currentIndex: number, total: number): void;
    updateNavButtons(isFirst: boolean, isLast: boolean, buttonPrevious: HTMLButtonElement, buttonNext: HTMLButtonElement): void;
    updateNavLabel(currentIndex: number, total: number): void;
    getButtons(): NavButtons;
    getLabel(): HTMLDivElement;
    mount(): void;
    getElement(): HTMLDivElement;
}

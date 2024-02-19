import { EventManager } from "./EventManager";
export declare class IconButtonGroup {
    protected container: HTMLDivElement;
    protected buttonClass: string;
    protected selectedButtonClass: string;
    protected selected: string;
    protected iconButtonEvent: EventManager;
    protected currentGroup: string[];
    constructor(eventManager: EventManager, iconButtonClass: string, selectedButtonClass: string);
    setSelected(selected: string): void;
    updateIconButtons(icons: string[]): void;
    refresh(): void;
    getElement(): HTMLDivElement;
}
